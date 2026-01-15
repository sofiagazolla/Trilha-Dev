import './Footer.css';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiTiktokLine } from 'react-icons/ri';

const SERVICE_ID = 'service_duuhe1h';
const TEMPLATE_ID = 'template_zwtprm9';
const PUBLIC_KEY = '3_X8oKbghsiI_vH8x';

function Footer() {
	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		emailjs.init(PUBLIC_KEY);
	}, []);

	const onSubmit = (data) => {
		emailjs
			.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					nome: data.nome,
					email: data.email,
				},
				PUBLIC_KEY,
			)
			.then(() => {
				reset();
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<footer className='footer'>
			<div className='footer-content'>
				<img
					src='/logo/logo_footer.png'
					alt='Blossom'
					className='footer-logo'
				/>

				<div className='footer-social'>
					<h2>Conecte-se Conosco!</h2>

					<div className='footer-social-icons'>
						<a href='https://www.instagram.com/ejpixel/' target='_blank'>
							<FaInstagram size={40} />
						</a>
						<a href='https://www.instagram.com/ejpixel/' target='_blank'>
							<FiYoutube size={40} />
						</a>
						<a href='https://www.instagram.com/ejpixel/' target='_blank'>
							<RiTiktokLine size={40} />
						</a>
						<a href='https://www.instagram.com/ejpixel/' target='_blank'>
							<FaWhatsapp size={40} />
						</a>
						<a href='https://www.instagram.com/ejpixel/' target='_blank'>
							<FaXTwitter size={40} />
						</a>
						<a href='https://www.instagram.com/ejpixel/' target='_blank'>
							<MdOutlineMailOutline size={40} />
						</a>
					</div>
				</div>

				<div className='footer-form'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2>Inscreva-se em nossa Newsletter!</h2>
						<p>Esteja sempre por dentro de tudo que acontece na Blossom </p>
						<div className='footer-form-items'>
							<input
								type='text'
								placeholder='Digite seu nome'
								{...register('nome')}
							/>
							<input
								type='email'
								placeholder='Digite seu melhor email'
								{...register('email')}
							/>
						</div>
						<input className='footer-button' type='submit' value='Inscrever' />
					</form>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
