import React from 'react';
import CardStatements from '../../components/Cards/CardStatements/CardStatements';
import '../../App.css';
import './Depoimentos.css';
import statements from './DepoimentosData.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import CTADepoimentos from '../../components/CTADepoimentos/CTADepoimentos.jsx';
import CarouselSwiper from '../../components/CarouselSwiper/CarouselSwiper.jsx';

function Depoimentos() {
	return (
		<div className='container-depoimentos'>
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
					<CarouselSwiper>
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
                    </CarouselSwiper>
				</div>
			</div>

			<CTADepoimentos
				linha1='Venha agora ser mais'
				linha2='um de nossos clientes satisfeitos!'
                botao='Compre Agora'
                destino='/contact'
			/>

		</div>
	);
}

export default Depoimentos;
