import React from 'react';
import './CallToAction.css';
import { Link } from 'react-router-dom';

function CallToAction({ linha1, linha2, imgSrc }) {
	return (
		<section className='call-to-action'>
			<div className='cta-esquerda'>
				<h1>
					{linha1} <br /> {linha2}
				</h1>

				<p className='botao-cta'>
					<Link to='/contact'>Faça seu pedido</Link>
				</p>
			</div>
			<div className='cta-direita'>
				<div className='imgCTA'>
					<img src={imgSrc} />
				</div>
			</div>
		</section>
	);
}

export default CallToAction;
