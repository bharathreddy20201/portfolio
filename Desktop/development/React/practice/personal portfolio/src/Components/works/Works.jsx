import React from 'react'
import './works.css';
import Upwork from '../../img/ambest.png'
import Fiverr from '../../img/nafa.png'
import Amazon from '../../img/metrolabs.png'
import Shopify from '../../img/overseas.png'
import Facebook from '../../img/Realtime.png'
import {motion} from 'framer-motion'
 

const Works = () => {
  return (
    <div className="works">
        { /*left side */}
          <div className="awesome">
       <span>Works for all these</span>
       <span>Brands & Clients</span>
       <span>" I am responsible for analysing our brand positioning as well as consumer insights, <br />
        which helps us to develop and communicate our vision as well as our mission to our target audiences, <br />
         as well as translating brand elements into plans and go-to-market strategies, <br />
          working for clients to design promotional posts, posters and collecting data for the clients <br /> 
          on what they require in the design process. I also created seasonal festival designs to promote the branding of the company. "</span>
       <button className="button s-button">Hire me</button>
       <div className="blur s-blur1" style={{background:"#fdd3df"}}></div>
       </div>
      {/* right side */}
      <div className="w-right">
        <motion.div 
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{marginTop:'40px',marginBottom:'40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </motion.div>
        {/* background circle */}
        <motion.div
        initial={{rotate:45,left:'13rem',top:'5rem'}}
        whileInView={{rotate:0,left:'18rem',top:'0rem'}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="w-backCircle blueCircle"></motion.div>
        <motion.div
        initial={{rotate:45,left:'18rem',top:'5rem'}}
        whileInView={{rotate:0,left:'18rem',top:'0rem'}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="w-backCircle blueCircle"></motion.div>
        <motion.div
        initial={{rotate:45,left:'13rem',top:'5rem'}}
        whileInView={{rotate:0,left:'18rem',top:'8rem'}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="w-backCircle yellowCircle"></motion.div>
         <motion.div
        initial={{rotate:45,left:'18rem',top:'0rem'}}
        whileInView={{rotate:0,left:'18rem',top:'8rem'}}
        viewport={{margin:'-40px'}}
        transition={{duration:3.5,type:'spring'}}
        className="w-backCircle yellowCircle"></motion.div>

      </div>
    </div>
  )
}

export default Works