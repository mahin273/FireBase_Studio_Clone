import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaFolder, FaFolderOpen, FaFileCode } from "react-icons/fa";
import { FileIcon } from "../../atoms/FileIcon/FileIcon";

export const TreeNode = ({ fileFolderData }) => {
  const [visibility, setVisibility] = useState({});

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
  return (
    <div className="pl-4 text-[#d6deeb] select-none font-mono">
      {hasChildren ? (
        <div>
          <button
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
        <div className="flex items-center gap-2 pl-6 py-1 text-sm hover:text-[#7fdbca] transition-colors duration-150 cursor-pointer">
          <FileIcon extnension={computeExtension(fileFolderData)} />
          <span>{fileFolderData.name}</span>
        </div>
      )}
    </div>
  );
};
