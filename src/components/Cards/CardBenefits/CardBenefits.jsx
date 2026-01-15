import './CardBenefits.css';

function CardBenefits({
	icon: Icon,
	iconColor,
	iconSize,
	title,
	description,
	bgColor,
}) {
	return (
		<div className='card-benefits' style={{ backgroundColor: bgColor }}>
			<div className='benefits-icon'>
				<Icon size={iconSize} color={iconColor} />
			</div>
			<h2 className='titulo'> {title} </h2>
			<p className='descricao'> {description}</p>
		</div>
	);
}

export default CardBenefits;
