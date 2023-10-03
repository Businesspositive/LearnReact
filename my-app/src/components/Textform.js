import React, { useState } from 'react'

// useState is one of the hooks of react. there are so many
// hooks available in react

export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")

  }

  const handleClearClick = ()=>{
    let newText = text.substring(0,0);
    setText(newText)
    props.showAlert("Cleared the Text", "success")

  }

  const handleOnChange = (event)=>{
    // console.log("on Change")
    setText(event.currentTarget.value)
  }
  // Using State in React
  const [text, setText] = useState('Enter Text Here');
  // text = "byudwhgcd" wrong way to change the state
  // setText("new text") correct way to change the state
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3" style = {{backgroundColor:props.mode==='dark'?'white':'black'}}>
            <textarea id="myBox" value = {text} onChange={handleOnChange} rows="10" className="form-control" style = {{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

    </div>
    <div className="container my-2" style = {{backgroundColor:props.mode==='dark'?'grey':'white',
          color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Word and {text.length} Charectors</p>
      <p>{(text.split(" ").length)*0.008} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
