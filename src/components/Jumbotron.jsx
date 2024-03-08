import React from 'react'
import iPhone14Pro from '../assets/images/iphone-14.jpg'
import holdingIphone from '../assets/images/iphone-hand.png'
const Jumbotron = () => {
  return (
    <div id='jumbotron' className='jumbotron-section wrapper'>
        <h2 className='title'>
            New
        </h2>
        <img className='logo' src={iPhone14Pro} alt='iPhone14-pro'/>
        <p className='text'>
            Big and bigger.
        </p>
        <span className='description'>From 41.62/mo. for 24 mo. or 999$ before trade-in</span>
        <ul className='links'>
            <li>
                <button className='button' >
                    Buy
                </button>
            </li>
            <li>
                <a className='link' href='#sound-system'>
                    Learn More
                </a>
            </li>
        </ul>
        <img className='iphone-img' src={holdingIphone} alt='iPhone'/>
    </div>
  )
}

export default Jumbotron