import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaFolder, FaFolderOpen, FaFileCode } from "react-icons/fa";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import { useFolderContextMenuStore } from "../../../store/folderContextMenuStore";

export const TreeNode = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});

  const{editorSocket}=useEditorSocketStore();

  const{setFile,setIsOpen:setFileContextMenuIsOpen,
    setX:setFileContextMenuX,
    setY:setFileContextMenuY
  }=useFileContextMenuStore();

  const{setFolder,setIsOpen:setFolderContextMenuIsOpen,
    setX:setFolderContextMenuX,
    setY:setFolderContextMenuY
  }=useFolderContextMenuStore();

  function toggleVisibility(name) {
    setVisibility((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  if (!fileFolderData) return null;

  const isVisible = visibility[fileFolderData.name];
  const hasChildren = fileFolderData.children && fileFolderData.children.length > 0;

  function computeExtension(fileFolderData) {
    const name = fileFolderData.name.split(".");
    return name[name.length - 1];
  }

  function handleDoubleClick(fileFolderData) {
    console.log("Double clicked on:", fileFolderData);
    editorSocket.emit("readFile",{
      pathToFileOrFolder:fileFolderData.path
    })
  }

  function handleContextMenuForFiles(e,path){
    e.preventDefault();
    console.log("Right Clicked on",path)
    setFile(path);
    setFileContextMenuX(e.clientX);
    setFileContextMenuY(e.clientY);
    setFileContextMenuIsOpen(true);

  }
  function handleContextMenuForFolders(e,path){

    e.preventDefault();
      e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
    console.log("Right Clicked on folder",path)
    setFolder(path);
    setFolderContextMenuX(e.clientX);
    setFolderContextMenuY(e.clientY);
    setFolderContextMenuIsOpen(true);
  }

  return (
    <div className="pl-4 text-[#d6deeb] select-none font-mono">
      {hasChildren ? (
        <div>
          <button
           onContextMenu={(e)=>handleContextMenuForFolders(e,fileFolderData.path)}
            onClick={() => toggleVisibility(fileFolderData.name)}

            className="flex items-center gap-2 w-full text-left text-sm hover:text-[#7fdbca] transition-colors duration-150"

          >
            {isVisible ? (
              <IoIosArrowDown className="text-[#7fdbca]" />
            ) : (
              <IoIosArrowForward className="text-[#5c7080]" />
            )}
            {isVisible ? (
              <FaFolderOpen className="text-[#ffcb6b]" />
            ) : (
              <FaFolder className="text-[#f78c6c]" />
            )}
            <span>{fileFolderData.name}</span>
          </button>


          {isVisible && (
            <div className="ml-4 border-l border-[#5c7080]/40">
              {fileFolderData.children.map((child) => (
                <TreeNode key={child.name} fileFolderData={child} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
        onContextMenu={(e)=>handleContextMenuForFiles(e,fileFolderData.path)}
        onDoubleClick={() => handleDoubleClick(fileFolderData)}
        className="flex items-center gap-2 pl-6 py-1 text-sm hover:text-[#7fdbca] transition-colors duration-150 cursor-pointer">
          <FileIcon extnension={computeExtension(fileFolderData)} />
          <span>{fileFolderData.name}</span>
        </div>
      )}
    </div>
  );
};
