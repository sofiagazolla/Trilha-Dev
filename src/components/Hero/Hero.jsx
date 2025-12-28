import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { IoFlowerSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <section className='hero'>
        <div className='conteudo-esquerda'>
            <h1>Cultivadas com <br />
            muito amor, <br />
            para encher sua <br />
            vida de muito <br />
            amor
            </h1>
            
            <p className='botao-hero'>
                <Link to="/about">Compre Agora</Link>
            </p>
        </div>
        <div className='conteudo-direita'>

            <div className='flor'>
                <IoFlowerSharp className='icone-flor' />
            </div>

            <h1 className='logo'> Blossom </h1>
        </div>
    </section>
  )
}

export default Hero


/* TODO
centralizar o texto no botão 
*/