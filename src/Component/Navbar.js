import './NavbarStyle.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
const Navbar = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);

    const [color, setcolor] = useState(false);
    const ChangeColor = () =>{
        if(window.scrollY >= 100)
        {
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    }  
    window.addEventListener('scroll', ChangeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Protfolio</h1>
        </Link>
        <ul className={click ? "nav-manu active" : "nav-manu"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Project">Project</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>

        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : ( <FaBars size={20} style={{color: "#fff"}}/>)}
        </div>
    </div>
  )
}

export default Navbar
