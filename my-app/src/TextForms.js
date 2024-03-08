import React, { useState } from 'react';

export default function TextForms(props) {


  const handleUpClick = () => {
    console.log("upper case was clicked " + text);
    // setText("You clicked on the button handleUpClick");
    //CONVERTING TO UPPERCASE
    let upperText = text.toUpperCase();
    setText(upperText);
  }
  const handleToLowClick = () => {
    console.log("lower case was clicked " + text);
    // setText("You clicked on the button handleUpClick");
    //CONVERTING TO UPPERCASE
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("on change function");
  }
  const [text, setText] = useState("");
  // setText("this is new text from settext");
  // console.log(text);

  const handleDelete = () => {
    setText("");
    console.log("content has been deleted");
  }
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text}
              onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
          </div>

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>To uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleToLowClick}>To Lowercase</button>
          <button type="button" className="btn btn-secondary mx-2" onClick={handleDelete}>Delete Content</button>

        </div>

        <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h1>Yout Text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes reading</p>

          <h1>Preview :</h1>
          <p>{text.length > 0 ? text : "Enter the text:"}</p>

        </div>
      </div>
    </>
  )
}
