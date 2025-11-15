import Editor from '@monaco-editor/react'
import { use, useEffect, useState } from 'react'
import { useEditorSocketStore } from '../../../store/editorSocketStore';
import { useActiveFileTabStore } from '../../../store/activeFileTabStore';
export const EditorComponent = () => {

    const [editorState, setEditorState] = useState({
    theme: null,
  });

  const{editorSocket}=useEditorSocketStore();
  const{activeFileTab,setActiveFileTab}=useActiveFileTabStore();


async function downloadTheme() {
    const response =await fetch('/themes/night-owl.json')
    const data = await response.json();
    console.log(data)
    setEditorState({...editorState,theme:data});
}
  function handleEditorTheme(editor,monaco){
            if (editorState.theme && editorState.theme.base){
              monaco.editor.defineTheme('night-owl',editorState.theme);
              monaco.editor.setTheme('night-owl')}
   }

   editorSocket?.on("readFileSuccess",(data)=>{
    console.log("Read File Success:",data);
    setActiveFileTab(data.path,data.value)
   })

   useEffect(()=>{
    downloadTheme();

   },[])

   useEffect(()=>{
    if(!editorSocket) return;
   },[activeFileTab])



  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Top bar */}
      {/* <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <h1 className="text-lg font-semibold">My Firebase Project</h1>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-sm font-medium">
            Run
          </button>
          <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium">
            Save
          </button>
        </div>
      </div> */}

      {/* Editor */}
      <div className="flex-1">
        {editorState.theme &&
        <Editor
          height="100%"
          width="100%"
          defaultLanguage="javascript"
          defaultValue="// Start coding..."
          options={{
            fontSize: 14,
            minimap: { enabled: true },
            lineNumbers: 'on',

            automaticLayout: true,
            scrollbar: {
              verticalScrollbarSize: 8,
              horizontalScrollbarSize: 8,
            },
            scrollBeyondLastLine: false,
          }}

         value={activeFileTab?.value?activeFileTab.value:"// Open a file to start coding..."}
          onMount={handleEditorTheme}


        />}
      </div>
    </div>
  )
}
