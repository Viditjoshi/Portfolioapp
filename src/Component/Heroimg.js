import './Heroimg.css';
import React from 'react'
import intro from '../asstes/intro-bg.jpg';
import { Link } from 'react-router-dom';
const Heroimg = () => {
  return (
    <div className='Hero'>
        <div className='mask'>
            <img src={intro} className='into-img' alt='intoimg'/>
        </div>
        <div className='content'>
            <p>Hi, I'M A Vidit Joshi</p>
            <h1>React Develocd per.</h1>
            <div>
                <Link to={"/project"} className="btn">Projects</Link>
                <Link to={"/contact"} className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
