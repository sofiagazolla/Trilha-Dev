import React from 'react';
import CardServices from '../Cards/CardServices/CardServices';
import './Services.css';
import './ServicesData.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import services from './ServicesData.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from 'react-icons/pi';
import CarouselSwiper from '../CarouselSwiper/CarouselSwiper.jsx';

function Services() {
	return (
		<div className='container-servicos'>
			<h1> Nossos Serviços </h1>

            <CarouselSwiper>
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
            </CarouselSwiper>

		</div>
	);
}

export default Services;
