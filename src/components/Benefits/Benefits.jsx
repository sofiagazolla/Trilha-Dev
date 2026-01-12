import React from 'react';
import '../../App.css';
import CardBenefits from '../Cards/CardBenefits/CardBenefits';
import './Benefits.css';
import benefits from './BenefitsData';

const Benefits = () => {
	return (
		<section className='beneficios'>
			<h1>Porque escolher a Blossom?</h1>

			<div className='cards'>
				{benefits.map((benefit,index) => (
                    <CardBenefits
                        key={index}
                        icon={benefit.icon}
                        iconColor={benefit.iconColor}
                        iconSize={benefit.iconSize}
                        title={benefit.title}
                        description={benefit.description}
                        bgColor={benefit.bgColor}
                    />
                ))}
			</div>
		</section>
	);
};

export default Benefits;
