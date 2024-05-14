import React from 'react';
import "./index.css";
import Home from './router/Home.js';
import About from './router/About.js';
import Project from './router/Project.js';
import Contact from './router/Contact,js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
