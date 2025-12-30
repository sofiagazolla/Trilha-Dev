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
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PiArrowCircleRightFill,PiArrowCircleLeftFill } from "react-icons/pi";

function Services() {
    return (
        <div className='container-servicos'>

            <h1> Nossos Serviços </h1>

            <div className='carousel'>
                <button className="left-arrow">
                    <FaChevronLeft size={24} />
                </button>

                <button className="right-arrow">
                    <FaChevronRight size={24} />
                </button>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    speed={500}
                    navigation={{
                        prevEl: '.left-arrow',
                        nextEl: '.right-arrow',
                    }}
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
    </div>
  )
}

export default Services
