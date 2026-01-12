import React from 'react';
import './CardBenefits.css';

const CardBenefits = ({
	icon: Icon,
	iconColor,
	iconSize,
	title,
	description,
	bgColor,
}) => {
	return (
		<div className='card-container' style={{ backgroundColor: bgColor }}>
			<div className='icon-container'>
				<Icon size={iconSize} color={iconColor} />
			</div>
			<h2 className='titulo'> {title} </h2>
			<p className='descricao'> {description}</p>
		</div>
	);
};

export default CardBenefits;