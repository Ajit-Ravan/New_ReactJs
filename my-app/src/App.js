import About from "./About";
import "./App.css";

import Navbar from "./Navbar";
import TextForms from "./TextForms";
function App() {
  return (
    <>
      <Navbar title="Desi QnA" link ='links' />   
      <TextForms heading = "Enter the text to modify: "/>
      <About/>
    </>
  );
}

export default App;
