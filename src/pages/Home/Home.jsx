import './Home.css';
import Hero from '../../components/Hero/Hero';
import CTADepoimentos from '../../components/CTADepoimentos/CTADepoimentos';
import CallToAction from '../../components/CallToAction/CallToAction';
import Benefits from '../../components/Benefits/Benefits';

function Home() {
	return (
		<div className='home-page'>
			<Hero />

			<Benefits />

			<CTADepoimentos
				linha1='Está em dúvida?'
				linha2='Confira o que nossos clientes dizem!'
				botao='Depoimentos'
				destino='/statements'
			/>

			<CallToAction
				linha1='Encha o seu dia ou o de alguém que'
				linha2='você ama com cor, vida e amor agora!'
				imgSrc='/flores/7.png'
			/>
		</div>
	);
}

export default Home;
