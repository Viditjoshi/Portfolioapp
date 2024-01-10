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
          <Route path='https://viditjoshi.github.io/Portfolioapp/' element={<Home/>}/>
          <Route path='https://viditjoshi.github.io/Portfolioapp//About' element={<About/>}/>
          <Route path='https://viditjoshi.github.io/Portfolioapp//Project' element={<Project/>}/>
          <Route path='https://viditjoshi.github.io/Portfolioapp//Contact' element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
