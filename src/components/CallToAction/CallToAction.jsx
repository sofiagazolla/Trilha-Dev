import './CallToAction.css';
import { Link } from 'react-router-dom';

function CallToAction({ linha1, linha2, imgSrc }) {
	return (
		<section className='call-to-action'>
			<div className='cta-left'>
				<h1>
					{linha1} <br />
					{linha2}
				</h1>

				<p className='cta-button'>
					<Link to='/contact'>Compre Agora</Link>
				</p>
			</div>
			<div className='cta-right'>
				<div className='cta-image'>
					<img src={imgSrc} />
				</div>
			</div>
		</section>
	);
}

export default CallToAction;
