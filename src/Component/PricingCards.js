import { Link } from 'react-router-dom';
import './PricingCards.css';
import React from 'react'

const PricingCards = () => {
  return (
    <div className='Pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/Contact" className='btn btn1'>PURCHASE NOW</Link>
            </div>
            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='btc'>$200</p>
                <p>- 10 Days -</p>
                <p>- 100 Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/Contact" className='btn btn1'>PURCHASE NOW</Link>
            </div>
            <div className='card'>
                <h3>- Business -</h3>
                <span className='bar'></span>
                <p className='btc'>$500</p>
                <p>- 30 days -</p>
                <p>- Unlimited -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/Contact" className='btn btn1'>PURCHASE NOW</Link>
            </div>
        </div>
      
    </div>
  )
}

export default PricingCards
