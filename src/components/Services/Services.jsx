import React from 'react'
import CardServices from '../CardServices/CardServices'
import './Services.css'
import './ServicesData.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import services from './ServicesData.js'


function Services() {
    return (
        <div className='container-servicos'>

            <h1> Nossos Serviços </h1>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                speed={500}
                navigation={true}
                breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                }}
            >
            
                {services.map((service, index) => (
                <SwiperSlide key={index}>
                    <CardServices
                    imgSrc={service.imgSrc}
                    imgAlt={service.imgAlt}
                    bgColor={service.bgColor}
                    subtitle={service.subtitle}
                    />
                </SwiperSlide>
                ))}
            </Swiper>

            
    </div>
  )
}

export default Services
