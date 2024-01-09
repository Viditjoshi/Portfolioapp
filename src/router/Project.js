import React from 'react'
import Navbar from '../Component/Navbar';
import  Heroimg2  from '../Component/Heroimg2';
import Footer from '../Component/Footer';
import PricingCards from '../Component/PricingCards';
import Work from '../Component/Work';
const Project = () => {
  return (
    <div>
         <Navbar/>
         <Heroimg2 heading="PROJECTS" text="Some of My Most Reacnt Works"/>
         <PricingCards/>
         <Work/>
         <Footer/>
    </div>
  )
}

export default Project
