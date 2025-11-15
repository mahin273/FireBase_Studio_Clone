import express from 'express';
import {PORT}  from './config/serverConfig.js';
import cors from 'cors';
import apiRouter from "./routes/index.js"
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import chokidar from "chokidar"
import path from 'path';
import { handleEditorSocketEvent } from './socketHandlers/editorHandler.js';



const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors:{
    origin:"*",
    methods:["GET","POST","PUT","DELETE"]
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

io.on('connection',(socket)=>{
  console.log(`New client connected: ${socket.id}`);

});
app.use('/api',apiRouter)

const editorNampespace = io.of('/editor');

editorNampespace.on('connection',(socket)=>{
     console.log("Editor connected")

     console.log(socket)

  let projectId = socket.handshake.query.projectId;

  console.log("Project id after conection",projectId);

    let watcher;

    if(projectId){
       watcher = chokidar.watch(`./projects/${projectId}`,{
        ignored:(path)=>path.includes("node_modules"),
        persistent:true,
        awaitWriteFinish:{
          stabilityThreshold:2000
        },
        ignoreInitial: true
      });
      watcher.on("all",(event,path)=>{
        console.log(event,path)
      })
    };

    handleEditorSocketEvent(socket);



  socket.on("disconnect",async()=>{
    await watcher.close();
    console.log("Editor disconnected ")
  }
)
})

server.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
