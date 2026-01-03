import React from 'react';
import CardStatements from '../../components/CardStatements/CardStatements';
import './Depoimentos.css';
import statements from './DepoimentosData.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import CTADepoimentos from '../../components/CTADepoimentos/CTADepoimentos.jsx';
import { GiVanillaFlower } from 'react-icons/gi';
import { TbLineDotted } from 'react-icons/tb';

function Depoimentos() {
	return (
		<div>
			<div className='container-statements'>
				<h1> O que nossos clientes dizem? </h1>
				<h3>
					Histórias reais de momentos especiais feitos mais especiais <br />
					com a ajuda da Blossom
				</h3>

				<div className='estatisticas'>
					<div className='item'>
						<h1>Milhares</h1>
						<p>
							{' '}
							de clientes <br />
							satisfeitos{' '}
						</p>
					</div>
					<div className='item'>
						<h1>20</h1>
						<p>
							{' '}
							anos de <br />
							experiência{' '}
						</p>
					</div>
					<div className='item'>
						<h1>10.000+</h1>
						<p> arranjos criados </p>
					</div>
					<div className='item'>
						<h1>4.99</h1>
						<p> avaliação média </p>
					</div>
				</div>

				<div className='carousel-statements'>
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
						{statements.map((statement, index) => (
							<SwiperSlide key={index}>
								<CardStatements
									review={statement.review}
									imgSrc={statement.imgSrc}
									imgAlt={statement.imgAlt}
									name={statement.name}
									date={statement.date}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

            <div className='divisor'>
				<TbLineDotted className='divisor-pontinhos' />
				<GiVanillaFlower className='divisor-flor' />
				<TbLineDotted className='divisor-pontinhos' />
			</div>

			<CTADepoimentos
				linha1='Venha agora ser mais'
				linha2='um de nossos clientes satisfeitos!'
			/>

            <div className='divisor'>
				<TbLineDotted className='divisor-pontinhos' />
				<GiVanillaFlower className='divisor-flor' />
				<TbLineDotted className='divisor-pontinhos' />
			</div>
		</div>
	);
}

export default Depoimentos;
