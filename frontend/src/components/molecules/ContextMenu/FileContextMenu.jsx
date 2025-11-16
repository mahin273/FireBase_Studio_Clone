import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import './FileContextMenu.css'
export const FileContextMenu = ({x,y,path})=>{

  const{setIsOpen}=useFileContextMenuStore();

  const{editorSocket}=useEditorSocketStore();

  function handleFileDelete(e){
    e.preventDefault();
    console.log("Delete file at path:",path)
    editorSocket.emit("deleteFile",{
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
      onClick={handleFileDelete}
      >
        Delete File
      </button>
      <button
      className="fileContextButton"
      >

        Rename File
      </button>
    </div>
  )
}
