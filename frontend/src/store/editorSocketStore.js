import {create } from 'zustand';
import { useActiveFileTabStore } from './activeFileTabStore';
import { useTreeStructureStore } from './treeStructureStore';

export const useEditorSocketStore = create((set)=>({
  editorSocket:null,
  setEditorSocket:(socket)=>{

    const activeFileTabStore = useActiveFileTabStore.getState().setActiveFileTab;
    const projectTreeStructureSetter = useTreeStructureStore.getState().setTreeStructure;
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

   socket?.on("deleteFileSuccess",()=>{
    projectTreeStructureSetter();
   });

   socket?.on("deleteFolderSuccess",()=>{
    console.log("Folder Deleted Successfully yo yo");
    projectTreeStructureSetter();
   });

    set({
      editorSocket:socket
    });
  }
}));
