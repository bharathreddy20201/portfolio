import React from 'react'
import './Cards.css'

const Cards = ({emoji,heading,details}) => {
  return (
    <div className='card'>
   <img src={emoji} alt="" />
   <span>{heading}</span>
   <span>{details}</span>
<button className='c-button'>Explore more</button>
    </div>
  )
}

export default Cards