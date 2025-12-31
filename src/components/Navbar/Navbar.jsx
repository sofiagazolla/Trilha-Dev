import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false); // varivel booleana que indica se o menu esta aberto ou nao, função que muda o valor e seta em falso (fechado)

  return <nav>

    {/* quando clica, fecha o menu  */}
    <Link to="/" onClick={() => setMenuOpen(false)}> 
        <img src="/logo_simples.png" alt="Blossom" className='logo' />
    </Link>
    
    <div className="menu">

        <div className='icon-menu'>
            <Hamburger toggled={menuOpen} size={25} toggle={setMenuOpen} color='#321650' className='icon-menu'/> {/* cria o ícone do hamburger*/}
        </div>

        {/* atributos da animação
            initial -> define o estado inicial. opacidade em zero estabelece que é invisível.
            animate -> define qual será o estado final da animação. opacidade em um estabelece visível.
            exit -> define o estado depois de finalizar. invisibiliza de novo.
            transition -> define a duração da animação.  
        */}

        <AnimatePresence>
        {menuOpen && (
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mobile-menu-container"
          >

            <ul className="mobile-menu">

                <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 0 / 10,
                    }}
                    key="about"
                >
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>Sobre Nós</NavLink>
                </motion.li>


                <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 1 / 10,
                    }}
                    key="statements"
                >
                    <NavLink to="/statements" onClick={() => setMenuOpen(false)}>Depoimentos</NavLink>
                </motion.li>


                <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 2 / 10,
                    }}
                    key="contact"
                >
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contato</NavLink>
                </motion.li>


                </ul>
            </motion.div>
            )}
        </AnimatePresence>
    </div>

    {/* cria o menu versão desktop, simples, sem nenhuma animação */}
    <ul className="desktop-menu">
      <li>
        <NavLink to="/about">Sobre Nós</NavLink>
      </li>

      <li>
        <NavLink to="/statements">Depoimentos</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contato</NavLink>
      </li>
    </ul>

  </nav>
}

export default Navbar

