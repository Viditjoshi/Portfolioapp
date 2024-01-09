import React from 'react'
import Navbar from '../Component/Navbar';
import  Heroimg2  from '../Component/Heroimg2';
import Footer from '../Component/Footer';
import Form from '../Component/Form';
const Contact = () => {
  return (
    <div>
         <Navbar/>
         <Heroimg2 heading="Contact Us" text="Im a Vidit Joshi Full-stack developer"/>
         <Form/>
         <Footer/>
    </div>
  )
}

export default Contact
