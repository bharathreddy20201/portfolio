import React from 'react'
import './Portfolio.css'
import {Swiper ,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>

        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3.6}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            
        </Swiper>

    </div>
  )
}

export default Portfolio