import React from 'react'
import Navbar from '../Component/Navbar';
import  Heroimg2  from '../Component/Heroimg2';
import Footer from '../Component/Footer';
import AboutContent from '../Component/AboutContent';
const About = () => {
  return (
    <div>
       <Navbar/>
       <Heroimg2 heading="About Me" text="Im a Vidit Joshi Full-stack developer"/>
        <AboutContent/>
         <Footer/>
      
    </div>
  )
}

export default About