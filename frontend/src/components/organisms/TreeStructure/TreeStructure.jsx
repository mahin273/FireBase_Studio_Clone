import { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore"

export const TreeStructure =()=>{

  const{treeStructure,setTreeStructure}=useTreeStructureStore();

  // const{projectId}=useParams();

 useEffect(()=>{
  if(treeStructure){
    console.log(treeStructure)
  }else{
    setTreeStructure();
  }

 },[setTreeStructure,treeStructure]);

  return(
    <div>
      <h1>Tree Structure</h1>
    </div>
  )
}
