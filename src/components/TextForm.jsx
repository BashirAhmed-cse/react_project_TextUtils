import React, { memo, useState  } from 'react'

export default memo(function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to Uppercase", "success");
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to Lowercase", "success");
    }
    const handleClearClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Clear", "danger");
    }
    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

    // toggle style
    const [mystyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const toggleStyle = ()=>{
        if(mystyle.color == 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
    }

  return (
    <>
     <div className="container" style={mystyle}>
        <div>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upparcase</button>
            <button className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
     </div>
     <div className="container my-4" style={mystyle}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
    </>
  )
})
