import './CarouselSwiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CarouselSwiper({ children }) {
	return (
		<div className='carousel-swiper'>
			<button className='left-arrow'>
				<FaChevronLeft size={24} />
			</button>

			<button className='right-arrow'>
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
				{children}
			</Swiper>
		</div>
	);
}

export default CarouselSwiper;
