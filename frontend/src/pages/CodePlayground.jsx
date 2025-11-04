import { useParams } from "react-router-dom"
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";

export const CodePlayground = ()=>{
    const{projectId}=useParams();
    return(
        <>
        projectId: {projectId}
        <EditorComponent />
        </>
    )
} 