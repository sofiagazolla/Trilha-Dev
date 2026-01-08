import React from 'react';
import { GiVanillaFlower } from 'react-icons/gi';
import { TbLineDotted } from 'react-icons/tb';
import '../../App.css';
import { Link } from 'react-router-dom';
import './CTADepoimentos.css';

function CTADepoimentos({ linha1, linha2, botao, destino }) {
	return (
        <div className='container-cta-depoimentos'>

            <div className='divisor'>
                <TbLineDotted className='divisor-pontinhos' />
                <GiVanillaFlower className='divisor-flor' />
                <TbLineDotted className='divisor-pontinhos' />
            </div>

            <div className='cta-depoimentos'>
                <img src='/desenhos-flor/verde.png' className='flor-verde' />

                <div className='texto-button'>
                    <h1>
                        {' '}
                        {linha1} <br />
                        {linha2}
                    </h1>
                    <p className='botao-depoimentos'>
                        <Link to={destino}>{botao}</Link>
                    </p>
                </div>

                <img src='/desenhos-flor/rosa.png' className='flor-rosa' />
            </div>

            <div className='divisor'>
                <TbLineDotted className='divisor-pontinhos' />
                <GiVanillaFlower className='divisor-flor' />
                <TbLineDotted className='divisor-pontinhos' />
            </div>

        </div>
	);
}

export default CTADepoimentos;
