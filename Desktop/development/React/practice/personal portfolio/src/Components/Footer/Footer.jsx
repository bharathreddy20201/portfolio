import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
   <div className="footer">
    <img src={wave} alt="" className='image'/>
    <div className="f-content">
        <span>bharathreddy20203@gmail.com</span>
        <div className="f-icons">
            <Insta color='white' size='3rem'/>
            <Facebook color='white' size='3rem'/>
            <Linkedin color='white' size='3rem'/>
        </div>
    </div>
   </div>
  )
}

export default Footer