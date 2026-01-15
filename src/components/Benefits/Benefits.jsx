import '../../App.css';
import './Benefits.css';
import CardBenefits from '../Cards/CardBenefits/CardBenefits';
import benefits from './BenefitsData';

function Benefits() {
	return (
		<section className='benefits'>
			<h1>Porque escolher a Blossom?</h1>

			<div className='benefits-cards'>
				{benefits.map((benefit, index) => (
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
}

export default Benefits;
