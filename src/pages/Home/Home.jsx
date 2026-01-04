import Hero from '../../components/Hero/Hero';
import CTADepoimentos from '../../components/CTADepoimentos/CTADepoimentos';
import CallToAction from '../../components/CallToAction/CallToAction';
import { GiVanillaFlower } from 'react-icons/gi';
import { TbLineDotted } from 'react-icons/tb';
import Benefits from '../../components/Benefits/Benefits';
import './Home.css';

function Home() {
	return (
		<div>
			<Hero />

			<Benefits />

			<div className='divisor'>
				<TbLineDotted className='divisor-pontinhos' />
				<GiVanillaFlower className='divisor-flor' />
				<TbLineDotted className='divisor-pontinhos' />
			</div>

			<CTADepoimentos
				linha1='Está em dúvida?'
				linha2='Confira o que nossos clientes dizem!'
                botao='Depoimentos'
			/>

			<div className='divisor'>
				<TbLineDotted className='divisor-pontinhos' />
				<GiVanillaFlower className='divisor-flor' />
				<TbLineDotted className='divisor-pontinhos' />
			</div>

			<CallToAction
				linha1='Encha o seu dia ou o de alguém que'
				linha2='você ama com cor, vida e amor agora!'
				imgSrc='/flores/7.png'
			/>
		</div>
	);
}

export default Home;
