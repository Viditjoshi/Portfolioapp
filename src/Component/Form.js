import './FormStyle.css';
import React from 'react'

const Form = () => {
  return (
    <div className='Form'>
        <h1>Contact Form</h1>
        <form>
            <label>Your Name</label>
            <input type='text' placeholder='Enter Name'></input>
            <label>Your Email</label>
            <input type='email' placeholder='Enter Email id'></input>
            <label>Your Subject</label>
            <input type='text' placeholder='Enter Subject'></input>
            <label>Your Massage</label>
            <textarea rows="6" placeholder='Type your message here'></textarea>    
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
