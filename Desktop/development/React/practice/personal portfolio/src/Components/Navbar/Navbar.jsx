import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Bharath</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <Link to='services' spy={true} smooth={true}>Services</Link>
                    <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
                    
                   <Link to='portfolio' spy={true} smooth={true}>Portfolio</Link>

                   <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
                </ul>
            </div>
            <Link to='contact' spy={true} smooth={true}>
            <button className="button">Contact</button>
            </Link>
            
            
        </div>

    </div>
  )
}

export default Navbar