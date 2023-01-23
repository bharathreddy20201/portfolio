import React from 'react'
import './Services.css'
import Cards from '../card/Cards'
import Heartemoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import resume from './Resume.pdf'
import {motion} from 'framer-motion'

const Services = () => {
  const transition ={duration:2 ,type:'spring'}
  return (
    <div className='services'>
        {/* Left side */}
        <div className="awesome">
       <span>My Awesome</span>
       <span>services</span>
       <span>Assisting in the design and development of the company's logo, <br /> and having the ability to make the proper branding for the company</span>
       <a href={resume} download><button className="button s-button">Download CV</button></a>
       <div className="blur s-blur1" style={{background:"#fdd3df"}}></div>
       </div>
        {/* Right Side */}
        <div className="cards">
         <motion.div
         initial={{left:'28rem'}}
         whileInView={{left:'34rem'}}
         transition={transition}
         style={{left:'34rem'}}> <Cards 
          emoji = {Heartemoji}
          heading = {"Designing"}
          details = {'Figma,Adobe Illustartor,Photoshop,XD'}
          /></motion.div>
            <motion.div
            initial={{left:'1rem',top:'15rem'}}
            whileInView={{top:'12rem',left:'4rem'}}
            transition={transition}
            style={{top:'12rem',left:'4rem'}}> <Cards 
          emoji = {Glasses}
          heading = {"Developing"}
          details = {'HTML,CSS,Javascript,React JS,Bootstrap'}
          /></motion.div>
          <motion.div
          initial={{top:'25rem',left:'20rem'}}
          whileInView={{top:'22rem',left:'24rem'}}
          transition={transition}
          style={{top:'22rem',left:'24rem'}}> <Cards 
          emoji = {Humble}
          heading = {"UI/UX"}
          details = {'Adobe XD,Figma'}
          /></motion.div>
       <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

        </div>
        
      
    </div>
  )
}

export default Services