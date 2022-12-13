import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './landing.scss'

const Landing = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        className="mySwiper"
        slideToClickedSlide={true}
      >
        <SwiperSlide onClick={() => console.log('here')}>
          <img src="assets/1.jpg" alt="1" className='slide-bg' />
        </SwiperSlide>
        <SwiperSlide onClick={() => console.log('here')}>
          <img src="assets/2.JPG" alt="2" className='slide-bg' />
        </SwiperSlide>
        <SwiperSlide onClick={() => console.log('here')}>
          <img src="assets/3.jpg" alt="3" className='slide-bg' />
        </SwiperSlide>
        <SwiperSlide onClick={() => console.log('here')}>
          <img src="assets/4.jpg" alt="4" className='slide-bg' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Landing
