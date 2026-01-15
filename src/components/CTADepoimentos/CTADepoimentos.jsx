import '../../App.css';
import './CTADepoimentos.css';
import { GiVanillaFlower } from 'react-icons/gi';
import { TbLineDotted } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function CTADepoimentos({ linha1, linha2, botao, destino }) {
	return (
		<div className='cta-depoimentos'>
			<div className='divider'>
				<TbLineDotted />
				<GiVanillaFlower />
				<TbLineDotted />
			</div>

			<div className='cta-depoimentos-content'>
				<img src='/desenhos-flor/verde.png' className='cta-green-flower' />

				<div className='cta-depoimentos-text'>
					<h1>
						{' '}
						{linha1} <br />
						{linha2}
					</h1>
					<p className='cta-depoimentos-button'>
						<Link to={destino}>{botao}</Link>
					</p>
				</div>

				<img src='/desenhos-flor/rosa.png' className='cta-pink-flower' />
			</div>

			<div className='divider'>
				<TbLineDotted />
				<GiVanillaFlower />
				<TbLineDotted />
			</div>
		</div>
	);
}

export default CTADepoimentos;
