import React from 'react'
import './CallToAction.css'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className='call-to-action'>
        <div className='cta-esquerda'>
            <h1>Encha o seu dia ou o de alguém que <br />
                você ama com cor, vida e amor agora!
            </h1>
            
            <p className='botao-cta'>
                <Link to="/contact">Faça seu pedido</Link>
            </p>
        </div>
        <div className='cta-direita'>

            <div className='imgCTA'>
                <img src='/flores/7.png'/>
            </div>

        </div>
    </section>
  )
}

export default CallToAction

