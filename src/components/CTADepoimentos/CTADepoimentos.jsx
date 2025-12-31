import React from 'react'
import { Link } from 'react-router-dom'
import './CTADepoimentos.css'

function CTADepoimentos({
    linha1,
    linha2,
}) {
  return (
    <section className='cta-depoimentos'>
    
        <img src='/desenhos-flor/verde.png' className='flor-verde' />

        <div className='texto-button'>
            <h1> {linha1} <br />
                {linha2}
            </h1>
            <p className='botao-depoimentos'>
                <Link to="/statements">Depoimentos</Link>
            </p>

        </div>

        <img src='/desenhos-flor/rosa.png' className='flor-rosa' />

    </section>
  )
}

export default CTADepoimentos
