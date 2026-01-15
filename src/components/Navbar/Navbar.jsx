import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import CloseOnScroll from '../Scroll/CloseOnScroll';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	CloseOnScroll(setMenuOpen);

	return (
		<nav>
			<Link to='/' onClick={() => setMenuOpen(false)}>
				<img
					src='/logo/logo_simples.png'
					alt='Blossom'
					className='navbar-logo'
				/>
			</Link>

			<div className='menu'>
				<div className='navbar-menu-icon'>
					<Hamburger
						toggled={menuOpen}
						size={25}
						toggle={setMenuOpen}
						color='#321650'
						className='navbar-menu-icon'
					/>
				</div>

				<AnimatePresence>
					{menuOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className='navbar-mobile'
						>
							<ul className='navbar-mobile-menu'>
								<motion.li
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.1 + 0 / 10,
									}}
									key='about'
								>
									<NavLink to='/about' onClick={() => setMenuOpen(false)}>
										Sobre Nós
									</NavLink>
								</motion.li>

								<motion.li
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.1 + 1 / 10,
									}}
									key='statements'
								>
									<NavLink to='/statements' onClick={() => setMenuOpen(false)}>
										Depoimentos
									</NavLink>
								</motion.li>

								<motion.li
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.1 + 2 / 10,
									}}
									key='contact'
								>
									<NavLink to='/contact' onClick={() => setMenuOpen(false)}>
										Contato
									</NavLink>
								</motion.li>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<ul className='navbar-desktop'>
				<li>
					<NavLink to='/about'>Sobre Nós</NavLink>
				</li>

				<li>
					<NavLink to='/statements'>Depoimentos</NavLink>
				</li>

				<li>
					<NavLink to='/contact'>Contato</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
