import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFolderContextMenuStore } from "../../../store/folderContextMenuStore";
import './FileContextMenu.css'
export const FolderContextMenu = ({x,y,path})=>{

  const{setIsOpen}=useFolderContextMenuStore();

  const{editorSocket}=useEditorSocketStore();

  function handleFolderDelete(e){
    e.preventDefault();
    console.log("Delete Folder at path:",path)
    editorSocket.emit("deleteFolder",{
      pathToFileOrFolder:path
    });
    setIsOpen(false);

  }
  return(
    <div
    onMouseLeave={()=>{
      console.log("Mouse Left Context Menu")
      setIsOpen(false);

    }}
    className="fileContextOptionsWrapper"
    style={{
      left:x,
      top:y,

    }}
    >
      <button
      className="fileContextButton"
      onClick={handleFolderDelete}
      >
        Delete Folder
      </button>
      <button
      className="fileContextButton"
      >

        Rename Folder
      </button>
    </div>
  )
}
