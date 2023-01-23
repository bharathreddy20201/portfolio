import React from 'react'
import './Intro.css'
import Floatingdiv from '../Floatingdiv/Floatingdiv'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glasses from '../../img/glassesimoji.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'




const Intro = () => {
    const transition = {duration : 2,type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
  return (
    <div>
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! Iam</span>
                    <span>Bharath Kumar reddy</span>
                    <span>Fronend Developer with High level of Experiance
                        in web designing,development and making ux design and prototyping for the web templates
                    </span>

                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />

            </div>
            </div>
            <motion.div
            initial={{top:'-1%',left:'5%'}}
            whileInView={{top:'-6%',left:'1%'}}
            transition={transition}
            className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={glasses} alt="" />
            <motion.div 
            initial={{top:'-4%',left:'84%'}}
            whileInView={{left:'75%'}}
            transition={transition}
            style={{top:'-1%',left:'75%',
      background : darkMode? 'black':'', color : darkMode? 'black' : ''
    }}>
                <Floatingdiv image ={Crown}  text1 ='Web' text2='Developer'/>
            </motion.div>
                <motion.div
                initial={{top:'61%',left:'15%'}}
                whileInView={{top:'61%',left:'5%'}}
                transition={transition}
                
                style={{top:'61%',left:'5%', background : darkMode? 'black':'', color : darkMode? 'black' : ''}}>
                <Floatingdiv image ={thumbup}  text1 ='Best Design' text2='Award'/>
                </motion.div>
                <div className="blur" style={{background: 'rgb(238,210,255)'}}></div>
                <div className="blur" style={{background: '#c1f5ff',top:'17rem',left:'-8rem',width:'21rem',height:'11rem'}}></div>
                <div className="blur" style={{background: '#ffb6a1',top:'-5rem',left:'-12rem',width:'21rem',height:'11rem'}}></div>


            </motion.div>
        </div>
    </div>
  )
}

export default Intro