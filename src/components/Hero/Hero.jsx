import './Hero.css';
import { Link } from 'react-router-dom';
import { IoFlowerSharp } from 'react-icons/io5';

function Hero() {
	return (
		<section className='hero'>
			<div className='hero-left'>
				<h1>
					Cultivadas com <br />
					muito amor, <br />
					para encher sua <br />
					vida de muito <br />
					amor
				</h1>

				<p className='hero-button'>
					<Link to='/contact'>Compre Agora</Link>
				</p>
			</div>
			<div className='hero-right'>
				<div className='hero-flower'>
					<IoFlowerSharp className='hero-flower-icon' />
				</div>

				<h1 className='hero-logo'> Blossom </h1>
			</div>
		</section>
	);
}

export default Hero;
