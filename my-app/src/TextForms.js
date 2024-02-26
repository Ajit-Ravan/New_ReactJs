import React, { useState } from 'react';

export default function TextForms(props) {

    
    const handleUpClick = () => {
        console.log("upper case was clicked" + text);
        setText("You clicked on the button handleUpClick");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log("on change function");
    }
    const [text, setText] = useState("Enter the text modify: ");
    // setText("this is new text from settext");
    // console.log(text);
  return (
    <div>
          <h1>{props.heading}</h1>
        <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert</button>
    </div>
  )
}
