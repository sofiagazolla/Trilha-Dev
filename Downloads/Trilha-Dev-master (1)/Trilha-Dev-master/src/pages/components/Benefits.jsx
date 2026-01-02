import React from 'react';
import CardBenefits from '../CardBenefits/CardBenefits';
import {
	PiFlowerTulip,
	PiFlowerLight,
	PiFlowerLotusLight,
} from 'react-icons/pi';
import { LuFlower2 } from 'react-icons/lu';
import './Benefits.css';

const Benefits = () => {
	return (
		<section className='beneficios'>
			<h1>Porque escolher a Blossom?</h1>

			<div className='cards'>
				<CardBenefits
					icon={PiFlowerLight}
					iconColor='#5d4294'
					iconSize={60}
					title='Fresh Flowers'
					description="Fresh flowers brighten spaces, bringing nature's beauty indoors."
					bgColor='#F9EFFF' // Lilás clarinho
				/>

				<CardBenefits
					icon={PiFlowerTulip}
					iconColor='#006b3e'
					iconSize={60}
					title='Indoor Plants'
					description='lalalallalalalallala'
					bgColor='#BBE4C8' // Verde clarinho
				/>

				<CardBenefits
					icon={PiFlowerLotusLight}
					iconColor='#510C22'
					iconSize={60}
					title='Indoor Plants'
					description="Fresh flowers brighten spaces, bringing nature's beauty indoors."
					bgColor='#F19EB9' // Verde clarinho
				/>

				<CardBenefits
					icon={LuFlower2}
					iconColor='#3d4b49'
					iconSize={60}
					title='Indoor Plants'
					description="Fresh flowers brighten spaces, bringing nature's beauty indoors."
					bgColor='#CBF9F3' // Verde clarinho
				/>
			</div>
		</section>
	);
};

export default Benefits;
