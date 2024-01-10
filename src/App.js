import React from 'react';
import "./index.css";
import Home from './router/Home';
import About from './router/About';
import Project from './router/Project';
import Contact from './router/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
