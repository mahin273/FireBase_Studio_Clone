
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { EditorTab } from "../components/atoms/EditorTab/EditorTab";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useParams } from "react-router-dom";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEffect } from "react";

export const CodePlayground = ()=>{

  const{projectId:projectIdFromUrl}= useParams();

  const{setProjectId,projectId}=useTreeStructureStore();

  useEffect(()=>{
    setProjectId(projectIdFromUrl);
  },[])


    return(
        <>
        project Id: {projectIdFromUrl}
        {projectId && <TreeStructure />}
        <EditorTab isActive={true} />
        <EditorTab isActive={false}/>
        <EditorComponent  />

        </>
    )
}
