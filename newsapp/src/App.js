//CLASS BASED COMPONENT
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY2;
  // let pageSize = 6;
  const [progress, setProgress] = useState(0);

  let updateProgress = (progress) => {
    setProgress(progress);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={4}
          color='#1f1ce6'
          progress={progress}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={updateProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general" />}
          ></Route>
          <Route
            exact
            path="/business"
            element={<News setProgress={updateProgress} apiKey={apiKey} key="business" pageSize={5} country="in" category="business" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={updateProgress} apiKey={apiKey} key="entertainment" pageSize={5} country="in" category="entertainment" />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={<News setProgress={updateProgress} apiKey={apiKey} key="health" pageSize={5} country="in" category="health" />}
          ></Route>
          <Route
            exact
            path="/science"
            element={<News setProgress={updateProgress} apiKey={apiKey} key="science" pageSize={5} country="in" category="science" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News setProgress={updateProgress} apiKey={apiKey} key="sports" pageSize={5} country="in" category="sports" />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<News setProgress={updateProgress} apiKey={apiKey} key="technology" pageSize={5} country="in" category="technology" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}
export default App;
