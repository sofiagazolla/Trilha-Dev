import './CardStatements.css';
import { HiStar } from 'react-icons/hi';

function CardStatements({ review, imgSrc, name, date }) {
	return (
		<div className='card-statements'>
			<div className='statements-stars'>
				<HiStar />
				<HiStar />
				<HiStar />
				<HiStar />
				<HiStar />
			</div>

			<p className='statements-review'>{review}</p>

			<div className='statements-client'>
				<img src={imgSrc} alt='statements' className='statements-image' />
				<div className='client-info'>
					<p>{name}</p>
					<p>{date}</p>
				</div>
			</div>
		</div>
	);
}

export default CardStatements;
