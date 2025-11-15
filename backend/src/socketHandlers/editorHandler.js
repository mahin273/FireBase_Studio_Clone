import fs from 'fs/promises'
export const handleEditorSocketEvent = (socket,editorNampespace)=>{
  socket.on("writeFile" ,async({data,pathToFileOrFolder})=>{
    try {
      const response = await fs.writeFile(pathToFileOrFolder,data);
      editorNampespace.emit("writeFileSuccess",{
        data: "File written successfully",
        path: pathToFileOrFolder
      })

    } catch (error) {
      console.log("Error writing the file",error);
      socket.emit("error",{
        data:"Error writing the file"
      })

    }
  });

  socket.on("createFile",async({pathToFileOrFolder})=>{
    const isFileExist = await fs.stat(pathToFileOrFolder);
    if(isFileExist){
      socket.emit("error",{
        data:"File or folder already exists"
      })
      return;
    }
    try {
      const response = await fs.writeFile(pathToFileOrFolder,"");
      socket.emit("createFileSuccess",{
        data: "File created successfully",
      })

    } catch (error) {
      console.log("Error creating the file",error);
      socket.emit("error",{
        data:"Error creating the file"
      });

  }});

  socket.on("readFile",async({pathToFileOrFolder})=>{
    try {
      const data = await fs.readFile(pathToFileOrFolder);
      console.log("File data",data.toString());
      socket.emit("readFileSuccess",{
        value: data.toString(),
        path: pathToFileOrFolder
      })

    } catch (error) {
      console.log("Error reading the file",error);
      socket.emit("error",{
        data:"Error reading the file"
      });
  }});

  socket.on("deleteFile",async({pathToFileOrFolder})=>{
    try {
      const response = await fs.unlink(pathToFileOrFolder);
      socket.emit("deleteFileSuccess",{
        data: "File/Folder deleted successfully",
      })

    } catch (error) {
      console.log("Error deleting the file/folder",error);
      socket.emit("error",{
        data:"Error deleting the file/folder"
      });
  }});

  socket.on("createFolder",async({pathToFileOrFolder})=>{
    try {
      const response = await fs.mkdir(pathToFileOrFolder);
      socket.emit("createFolderSuccess",{
        data: "Folder created successfully",
      })

    } catch (error) {
      console.log("Error creating the folder",error);
      socket.emit("error",{
        data:"Error creating the folder"
      });
  } });

  socket.on("deleteFolder",async({pathToFileOrFolder})=>{
    try {
      const response = await fs.rmdir(pathToFileOrFolder,{recursive:true});
      socket.emit("deleteFolderSuccess",{
        data: "Folder deleted successfully",
      })

    } catch (error) {
      console.log("Error deleting the folder",error);
      socket.emit("error",{
        data:"Error deleting the folder"
      });
  } });

  socket.on("renameFile,",async({oldPath,newPath})=>{
    try {
      const response = await fs.rename(oldPath,newPath);
      socket.emit("renameFileSuccess",{
        data: "File/Folder renamed successfully",
      })

    } catch (error) {
      console.log("Error renaming the file/folder",error);
      socket.emit("error",{
        data:"Error renaming the file/folder"
      });
  } });

  socket.on("renameFolder",async({oldPath,newPath})=>{
    try {
      const response = await fs.rename(oldPath,newPath);
      socket.emit("renameFolderSuccess",{
        data: "Folder renamed successfully",
      })

    } catch (error) {
      console.log("Error renaming the folder",error);
      socket.emit("error",{
        data:"Error renaming the folder"
      });
  }});
}
