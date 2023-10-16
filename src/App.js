import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './HomePage';
import './App.css';
import TemplateCollect from './template/TemplateCollection';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/templatecollection" element={<TemplateCollect />} /> 
      </Routes>
    </Router>
  );
}

export default App;
