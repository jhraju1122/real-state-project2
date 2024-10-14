import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, EffectFade, Navigation, Pagination, Scrollbar,EffectFlip } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Scrollbar, EffectFlip, EffectFade ]}
        effect='fade'
        navigation
        pagination={{clickable:true}}
        scrollbar={{draggable:true}}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
            <img src="https://i.ibb.co.com/rQT5gLY/sdfsdfsd.jpg" className='w-[100%] h-[460px]' alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/jgjx6Vc/commercial-property-hero-image.webp" alt="" className='w-[100%] h-[460px]' /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/Db58h6z/commercial-real-estate.webp" className='w-[100%] h-[460px]' alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co.com/g3g5skt/sdfsdfs.jpg" className='w-[100%] h-[460px]' alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;