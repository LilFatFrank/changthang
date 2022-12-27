import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './landing.scss'
import { SLIDES } from '../../utils'
import { Sprite } from '../../components'
import { Lazy } from 'swiper'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const audio = useRef(null)

  const playAudio = () => audio.current.play()

  const navigate = useNavigate()

  return (
    <div className="landing">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={50}
        grabCursor={true}
        className="mySwiper"
        slideToClickedSlide={true}
        onActiveIndexChange={playAudio}
        modules={[Lazy]}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.key}>
            <img src={slide.image} alt={slide.key} className="slide-bg" />
            <div className="tour">
              <h1 className="title">{slide.title}</h1>
              {slide.subTitle ? (
                <h2 className="sub-title">{slide.subTitle}</h2>
              ) : null}
            </div>
            <label
              className="link"
              onClick={() => navigate(slide.href)}
            >
              {slide.link}
              <Sprite id="top-right-arrow" width={16} height={16} />
            </label>
          </SwiperSlide>
        ))}
      </Swiper>
      <audio src="assets/slide.mp3" ref={audio}></audio>
    </div>
  )
}

export default Landing
