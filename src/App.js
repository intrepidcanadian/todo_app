import React, { useState } from "react";
import "./App.scss";
import ToDoWrapper from "./components/ToDoWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
  <div>
    <Router>
      <Routes>
        <Route path = "/" element = {<ToDoWrapper />} />
      </Routes>
    </Router>
  </div>
  

  );
}

export default App;
