import React, { useState } from 'react'

export default function About(props) {
  //INSTEAD OF THIS OBJECT WE CAN USE THE USE STATE
  // let myStyle = {
  //     color:'white',
  //     background:'black'
  // }

  //changing button text
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const [myStyle, setMyStyle] = useState({
  //   color: 'white',
  //   background: 'black'
  // });
  //WE CANNOT USE THIS FUCTION BECAUSE WE HAVE REMOVED DARK MODE BUTTON FROM OUT ABOUT.JS JSX CODE
  // let toggleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     });
  //     setBtnText('Enable Dark Mode');
  //   } else {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     });
  //     setBtnText('Enabel Light Mode');
  //   }
  // }

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#183c71',
    backgroundColor: props.mode === 'dark' ? '#183c71' : 'white',
    border: '1px solid',
    borderColor: props.mode == 'dark' ? 'white' : '#183c71',

  }
  return (
    // The <div /> syntax is transformed at build time to React.createElement('div').
    //we can use also <> </> 
    <div className='container' style={myStyle}>
      <h2 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : '#183c71' }}>About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              Analyze your text.
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>This will analyze your text.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              You don't have to pay.
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>This website provides free services.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              Available on all the devices.
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
              <strong>It is available on all the devices and browsers.</strong>  It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <button type="button" onClick={toggleStyle} className="btn btn-primary mx-2 my-2">{btnText}</button>
      </div> */}


    </div>
  )
}
