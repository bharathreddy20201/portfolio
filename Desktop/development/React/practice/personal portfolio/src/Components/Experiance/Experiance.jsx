import React from 'react'
import './Experiance.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experiance = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className='experiance' 
   
    >
        <div className="acheivment">
            <div className="circle"   style={{ color : darkMode? 'black' : '' }}>1+</div>
            <span>Years</span>
            <span>Experiance</span>
        </div>
        <div className="acheivment">
            <div className="circle" style={{ color : darkMode? 'black' : '' }}>6+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="acheivment">
            <div className="circle" style={{ color : darkMode? 'black' : '' }}>3+</div>
            <span>Companies</span>
            <span>work</span>

        </div>
    </div>
  )
}

export default Experiance