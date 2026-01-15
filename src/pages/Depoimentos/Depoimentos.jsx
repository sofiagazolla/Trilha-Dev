import '../../App.css';
import './Depoimentos.css';
import CardStatements from '../../components/Cards/CardStatements/CardStatements';
import CTADepoimentos from '../../components/CTADepoimentos/CTADepoimentos.jsx';
import CarouselSwiper from '../../components/CarouselSwiper/CarouselSwiper.jsx';
import statements from './DepoimentosData.js';
import { SwiperSlide } from 'swiper/react';

function Depoimentos() {
	return (
		<div className='statements-page'>
			<div className='statements-container'>
				<h1> O que nossos clientes dizem? </h1>
				<h3>
					Histórias reais de momentos especiais feitos mais especiais <br />
					com a ajuda da Blossom
				</h3>

				<div className='statements-stats'>
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
