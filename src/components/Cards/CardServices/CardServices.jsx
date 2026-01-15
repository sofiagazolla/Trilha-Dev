import './CardServices.css';

function CardServices({ imgSrc, bgColor, subtitle }) {
	return (
		<section className='card-services'>
			<div
				className='card-services-container'
				style={{ backgroundColor: bgColor }}
			>
				<img src={imgSrc} alt='services' className='services-image' />
			</div>

			<p>{subtitle}</p>
		</section>
	);
}

export default CardServices;
