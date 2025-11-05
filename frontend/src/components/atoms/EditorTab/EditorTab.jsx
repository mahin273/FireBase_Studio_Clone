import './EditorButton.css'
export const EditorTab=({isActive})=>{

  function handleClick(){
    //Todo:implement later
  }
    return(
        <button
        className="editor-button"
        style={{
          color:isActive?'white':'gray',
          // backgroundColor: isActive? 'red':'blue'
          borderTop:isActive? 'border-top:2px solid rgb(204, 101, 101)' :'none'
        }}
        onclick={handleClick}
        >
            file.js
        </button>
    )
}
