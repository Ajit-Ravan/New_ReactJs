import { useState } from "react";
import About from "./About";
import "./App.css";

import Navbar from "./Navbar";
import TextForms from "./TextForms";
import React from "react";

function App() {
  //Adding dark mode and light mode functionality to our entire project
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0d0833';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    console.log(mode);
  };
  return (
    <>
      <Navbar title="Desi QnA" link="links" mode={mode} toggleMode={toggleMode} />
      <TextForms heading="Enter the text to modify: " mode={mode} />
      <About mode={mode} />
    </>
  );
}

export default App;
