import React from 'react'
import './Footer.css'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='Footer-Container'>
            <div className='left'>
                <div className='location'> 
                    <FaHome  size={25} style={{color:"white", marginRight : "2rem"}}/>
                     <div>
                        <p>Gov Hospital Near by,</p>
                        <p>Gujarat Junagadh Mendarda 362260.</p>
                    </div>
                </div>
                <div className='Phone'>
                    <h4>
                    <FaPhone size={25} style={{color:"white", marginRight : "2rem"}}/>
                     +91 9586607262
                    </h4>
                </div>
                <div className='Email'>
                    <h4>
                    <FaMailBulk size={25} style={{color:"white", marginRight : "2rem"}}/>
                     viditjoshi94@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About My Social Media</h4>
                <p>This is my Social Media PlatForm that show on Botton click on it and you have to get more information about me and my social media accout In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <div className='social'>
                     <FaFacebook size={30} style={{color:"white", marginRight : "2rem"}}/>
                     <FaTwitter size={30} style={{color:"white", marginRight : "2rem"}}/>
                     <FaInstagram size={30} style={{color:"white", marginRight : "2rem"}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
