import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './landing.scss'
import { SLIDES } from '../../utils'
import { Sprite } from '../../components'

const Landing = () => {
  return (
    <div className="landing">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={50}
        grabCursor={true}
        className="mySwiper"
        slideToClickedSlide={true}
      >
        {SLIDES.map((slide) => (
          <>
            <SwiperSlide key={slide.key}>
              <img src={slide.image} alt={slide.key} className="slide-bg" />
              <div className="tour">
                <h1 className="title">{slide.title}</h1>
                {slide.subTitle ? (
                  <h2 className="sub-title">{slide.subTitle}</h2>
                ) : null}
              </div>
              <a className="link" href="#">
                {slide.link}
                <Sprite id="top-right-arrow" width={16} height={16} />
              </a>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  )
}

export default Landing
