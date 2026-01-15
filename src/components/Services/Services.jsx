import './Services.css';
import services from './ServicesData.js';
import CardServices from '../Cards/CardServices/CardServices';
import CarouselSwiper from '../CarouselSwiper/CarouselSwiper.jsx';
import { SwiperSlide } from 'swiper/react';

function Services() {
	return (
		<div className='services'>
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
