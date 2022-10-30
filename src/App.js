import React from "react";
import "./index.css";
import SocialFollow from "./SocialFollow";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <SocialFollow />
    </>
  );
}

export default App;
