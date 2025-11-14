import { FaJs,FaReact,FaCss3 ,FaHtml5,FaGitAlt,FaFileCode,FaMarkdown    } from "react-icons/fa"
import { BsFiletypeJson } from "react-icons/bs";
export const FileIcon =({extnension})=>{

  const IconMapper ={
    "js": <FaJs className="text-yellow-400"/>,
    "jsx": <FaReact  className="text-green-400"/>,
    "css": <FaCss3   className="text-red-400"/>,
    "html": <FaHtml5  className="text-orange-400"/>,
    "gitignore": <FaGitAlt  className="text-gray-400"/>,
    "json": <BsFiletypeJson  className="text-red-200"/>,
    "md": <FaMarkdown  className="text-blue-500"/>,
    "default": <FaFileCode className="text-gray-400"/>,
  }
  return(
    <>

    {/* {extnension==="js" && <FaJs className="text-yellow-400"/>}
    {extnension==="jsx" && <FaReact  className="text-green-400"/>}
    {extnension==="css" && <FaCss3   className="text-red-400"/>}
    {extnension==="html" && <FaHtml5  className="text-orange-400"/>}
    {extnension==="gitignore" && <FaGitAlt  className="text-gray-400"/>}
    {extnension==="json" && <BsFiletypeJson  className="text-red-200"/>}
    {extnension==="md" && <FaMarkdown  className="text-blue-500"/>}
    {!["js","jsx","css","html","gitignore","json"].includes(extnension) && <FaFileCode className="text-gray-400"/>} */}
  {IconMapper[extnension]}
    </>

  )
}
