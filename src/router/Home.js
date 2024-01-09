import React from 'react'
import Navbar from '../Component/Navbar';
import HeroImg from '../Component/Heroimg';  
import Footer from '../Component/Footer';
import Work from '../Component/Work';
import Form from '../Component/Form';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
