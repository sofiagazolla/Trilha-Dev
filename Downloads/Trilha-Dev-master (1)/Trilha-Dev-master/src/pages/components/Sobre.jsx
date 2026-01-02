import Services from '../../components/Services/Services';
import './Sobre.css';
import { GiVanillaFlower } from 'react-icons/gi';
import { TbLineDotted } from 'react-icons/tb';
import CallToAction from '../../components/CallToAction/CallToAction';

function Sobre() {
	return (
		<div className='sobre-nos'>
			<div className='titulo'>
				<h1>Sobre nós</h1>
				<h2>
					Há 20 anos espalhando amor e construindo histórias lindas através de
					nossas flores
				</h2>
			</div>

			<div className='divisor'>
				<TbLineDotted className='divisor-pontinhos' />
				<GiVanillaFlower className='divisor-flor' />
				<TbLineDotted className='divisor-pontinhos' />
			</div>

			<div className='flor-texto'>
				<img src='/desenhos-flor/verde.png' className='flor-verde-sobre' />

				<div className='texto-um'>
					<p>
						{' '}
						Somos uma equipe muito apaixonada por flores, cheia de pessoas{' '}
						<br />
						que adoram transformar ideias em arranjos únicos e lindos. <br />
						Cada membro da Blossom contribui diretamente com a nossa missão de
						transformar
						<br />
						sentimentos em flores. Nós queremos que cada buquê entrega amor,
						carinho e <br />
						presença, mesmo quando as palavras <br />
						não derem conta e a nossa equipe trabalha ativamente para isso.
					</p>
				</div>

				<img src='/desenhos-flor/rosa.png' className='flor-rosa-sobre' />
			</div>

			{/* <Services /> */}

			<div className='divisor'>
				<TbLineDotted className='divisor-pontinhos' />
				<GiVanillaFlower className='divisor-flor' />
				<TbLineDotted className='divisor-pontinhos' />
			</div>

			{/* <div className='flor-texto'>
    
        <img src='/desenhos-flor/verde.png' className='flor-verde-sobre' />

        <div className='texto-um'>
            <p> Somos uma equipe muito apaixonada por flores, cheia de pessoas <br />
            que adoram transformar ideias em arranjos únicos e lindos. <br />
            Cada membro da Blossom contribui diretamente com a nossa missão de transformar<br />
            sentimentos em flores. Nós queremos que cada buquê entrega amor, carinho e  <br />
            presença, mesmo quando as palavras  <br />
            não derem conta e a nossa equipe trabalha ativamente para isso. 
            </p>
        </div>

        <img src='/desenhos-flor/rosa.png' className='flor-rosa-sobre' />

    </div> */}

			<Services />

			<CallToAction
				linha1='Venha fazer parte da nossa'
				linha2='linda história também!'
				imgSrc='/flores/3.png'
			/>
		</div>
	);
}

export default Sobre;
