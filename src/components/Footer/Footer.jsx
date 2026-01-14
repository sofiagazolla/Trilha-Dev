import emailjs from '@emailjs/browser';
import React, { useEffect } from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiTiktokLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';

const SERVICE_ID = 'service_duuhe1h';
const TEMPLATE_ID = 'template_zwtprm9';
const PUBLIC_KEY = '3_X8oKbghsiI_vH8x';

const Footer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, [])

	const onSubmit = (data) => {
		emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            nome: data.nome,
            email: data.email,
        }, PUBLIC_KEY)
        .then(() => {
            reset();
        })
        .catch((error) =>{
            console.log(error.message);
        })};

	return (
		<footer className='footer'>
			<div className='conteudo-footer'>
				<img src='/logo_footer.png' alt='Blossom' className='logo-footer' />

				<div className='redes-sociais'>
					<h2>Conecte-se Conosco!</h2>

					<div className='icones-redes-sociais'>
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

				<div className='form'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2>Inscreva-se em nossa Newsletter!</h2>
						<p>Esteja sempre por dentro de tudo que acontece na Blossom </p>
						<div className='itens-form'>
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
						<input
							className='botao-inscrever'
							type='submit'
							value='Inscrever'
						/>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
