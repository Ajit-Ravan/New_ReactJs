import { useState } from "react";
import About from "./About";
import "./App.css";

import Navbar from "./Navbar";
import TextForms from "./TextForms";
import React from "react";
import Alert from "./Alert";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  //Adding dark mode and light mode functionality to our entire project
  const [mode, setMode] = useState('light');
  //for Alert.js page sending msg in alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert();
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d0833';
      showAlert("Dark mode", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode", "success")
    }
    console.log(mode);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar title="Desi QnA" link="links" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <TextForms showAlert={showAlert} heading="Enter the text to modify: " mode={mode} />
          </>
        } />
        <Route path='About' element={
          <>
            <Navbar title="Desi QnA" link="links" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <About mode={mode} />
          </>
        } />
      </Routes>




    </BrowserRouter>








    //Previous code without routing :
    // <>
    //   <Navbar title="Desi QnA" link="links" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <TextForms showAlert={showAlert} heading="Enter the text to modify: " mode={mode} />
    //   <About mode={mode} />
    // </>
  );
}

export default App;
