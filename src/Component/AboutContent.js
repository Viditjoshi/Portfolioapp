import { Link } from 'react-router-dom';
import './AboutContent.css';
import React from 'react'
import React1 from "../asstes/react1.jpg";
import React2 from "../asstes/img5.webp"
const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>I am Full-stack developer. all though i know express.js mogoDB Node.js you can say as like i know MERN Stack.</p>
        <Link to={"/contact"}>
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={React2} alt='React1 img'/>
            </div>
            <div className='img-stack bottom'>
                <img src={React1} alt='React1 img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
