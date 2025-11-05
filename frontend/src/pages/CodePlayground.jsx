
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { EditorTab } from "../components/atoms/EditorTab/EditorTab";

export const CodePlayground = ()=>{

    return(
        <>

        <EditorTab isActive={true} />
        <EditorTab isActive={false}/>
        <EditorComponent  />

        </>
    )
}
