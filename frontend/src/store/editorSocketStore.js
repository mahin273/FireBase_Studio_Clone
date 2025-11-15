import {create } from 'zustand';
import { useActiveFileTabStore } from './activeFileTabStore';

export const useEditorSocketStore = create((set)=>({
  editorSocket:null,
  setEditorSocket:(socket)=>{

    const activeFileTabStore = useActiveFileTabStore.getState().setActiveFileTab;

    socket?.on("readFileSuccess",(data)=>{
    console.log("Read File Success:",data);
    activeFileTabStore(data.path,data.value)
   });
   socket?.on("writeFileSuccess",(data)=>{
    console.log("Write File Success:",data);
    socket.emit("readFile",{
      pathToFileOrFolder: data.path
    })
   });
    set({
      editorSocket:socket
    });
  }
}));
