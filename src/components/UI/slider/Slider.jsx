import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import horse from './sliderImg/horse.jpg';
import lion from './sliderImg/lion.jpg';
import ox from './sliderImg/ox.jpg';
import stag from './sliderImg/stag.jpg';
import './sliderstyles.css';
import SwiperCore, { Autoplay } from 'swiper/core';

SwiperCore.use([Autoplay]);


const Slider = () => {

  return (
    <div className="sliderwrapper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar,]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          "delay": 4000,
          "disableOnInteraction": false
        }}       
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log()}
      >
      <SwiperSlide>
        <img src={ lion } className="slide_img"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={ ox } className="slide_img"/>   
      </SwiperSlide>
      <SwiperSlide>
        <img src={ horse } className="slide_img"/>   
      </SwiperSlide>
      <SwiperSlide>
        <img src={ stag } className="slide_img"/>   
      </SwiperSlide>      
    </Swiper>    
    </div>
  )
}

export default Slider;