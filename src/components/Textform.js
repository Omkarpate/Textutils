import React,{useState} from 'react'



export default function Textform(props) {
  const handleUpClick=()=>{
    //console.log("upper case was click"+text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick=()=>{
    //console.log("upper case was click"+text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    
    let newText=" ";
    setText(newText)
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.Select();
    navigator.clipboard.writeText(text.value);

  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '))
  }

  const handleOnChange=(event)=>{
    //
    setText(event.target.value)

  }
  const [text,setText] = useState("");
  //setText("new");
  return (
    <>
   <div>
      <h1>{props.heading}</h1>
    <div className="mb-3">
        
        <textarea className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"> 
        </textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
    <button className="btn btn-primary  mx-2" onClick={handleLoClick}>Convert to lower case</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Test</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3">
     <h2>your text summary</h2>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").length} minutes to read</p>
     <h2>Preview</h2>
     <p>{text}</p>
    </div>
    </>
  )
}
