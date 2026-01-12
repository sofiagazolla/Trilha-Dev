import Services from '../../components/Services/Services';
import '../../App.css';
import './Sobre.css';
import { GiVanillaFlower } from 'react-icons/gi';
import { TbLineDotted } from 'react-icons/tb';
import CallToAction from '../../components/CallToAction/CallToAction';
import CustomPaging from '../../components/CarouselImagens/CarouselImagens';

function Sobre() {
	return (
		<div className='sobre-nos'>
			<div className='titulo'>
				<h1>Quem somos nós?</h1>
				<h3>
					Há 20 anos espalhando amor e construindo histórias <br />  lindas através de
					nossas flores
				</h3>
			</div>            

            <div><CustomPaging/></div>

			<div className='divisor'>
				<TbLineDotted />
				<GiVanillaFlower />
				<TbLineDotted />
			</div>

			<div className='flor-texto'>
				<img src='/desenhos-flor/verde.png' className='flor-verde-sobre' />

				<div className='texto-um'>
					<p>
						A Blossom nasceu do sonho de trazer mais cor e amor a vida das pessoas.<br />
                        Nascemos de uma barraquinha de flores pequena e hoje em dia somos uma floricultura
                        grande, mas a nossa missão continua a mesma: transformar sentimentos em flores. 
                        Nós queremos que cada buquê entregue amor, carinho e presença, 
                        mesmo quando as palavras não derem conta e a nossa equipe 
                        trabalha ativamente para isso. 
					</p>
				</div>

				<img src='/desenhos-flor/rosa.png' className='flor-rosa-sobre' />
			</div>


			<div className='divisor'>
				<TbLineDotted />
				<GiVanillaFlower />
				<TbLineDotted />
			</div>

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
