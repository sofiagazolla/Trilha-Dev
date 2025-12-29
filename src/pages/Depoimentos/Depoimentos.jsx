import React from 'react'
import CardStatements from '../../components/CardStatements/CardStatements'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Depoimentos.css'

const Depoimentos = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            }
        }
        ]
    };

    return (
        <div className='container-statements'>

            <h1> O que nossos clientes dizem? </h1>
            <h3> 
                Histórias reais de momentos especiais feitos mais especiais <br />
                com a ajuda da Blossom
            </h3>

            <div className='estatisticas'>
                <div className='item'>
                    <h1>Milhares</h1>
                    <p> de clientes <br />
                        satisfeitos </p>
                </div>
                <div className='item'>
                    <h1>20</h1>
                    <p> anos de <br />
                        experiência </p>
                </div>
                <div className='item'>
                    <h1>10.000+</h1>
                    <p> arranjos criados </p>
                </div>
                <div className='item'>
                    <h1>4.99</h1>
                    <p> avaliação média </p>
                </div>
            </div>

            <Slider {...settings}>
                <CardStatements
                    review="Excelente floricultura! Precisei de um arranjo de última hora e eles montaram ele muito rápido e de maneira lindíssima. Cuidado nota 10, atendimento ao cliente nota 10 e muito profissionalismo. Recomendo de olhos fechados"
                    imgSrc="/clientes/1.png"
                    imgAlt="lalala"
                    name="Sofia Gazolla"
                    date="5 de Novembro de 2025"
                />
                <CardStatements
                    review= "Que lugar maravilhoso! Fiz um pedido de um buquê para minha namorada e ficou perfeito. As flores estavam super frescas e o arranjo tinha apresentação impecável. O atendimento foi atencioso e prestativo. Muito satisfeito com o resultado. Recomendo!"
                    imgSrc="/clientes/2.jpg"
                    imgAlt="lalala"
                    name="Patricia Lorem"
                    date="5 de Novembro de 2025"
                />
                <CardStatements
                    review="Surpreendente qualidade das flores! Comprei um centro de mesa para minha mãe no dia da festa e chegou lindíssimo. A equipe foi muito gentil e paciente ao explicar as opções. Criatividade e cores nota 10. Com certeza voltarei. Recomendo!"
                    imgSrc="/clientes/3.jpg"
                    imgAlt="lalala"
                    name="Ricardo Ipsum"
                    date="5 de Novembro de 2025"
                />
                <CardStatements
                    review="Adorei a experiência! Precisava de flores para um casamento e conseguiram criar algo totalmente personalizado. O atendimento foi excepcional e muito profissional. As flores duraram muito tempo em casa. Ficou perfeito. Recomendo de olhos fechados!"
                    imgSrc="/clientes/4.jpg"
                    imgAlt="lalala"
                    name="Vanessa Lorem"
                    date="5 de Novembro de 2025"
                />
                <CardStatements
                    review="Excelente floricultura! Precisei de um arranjo de última hora e eles montaram ele muito rápido e de maneira lindíssima. Cuidado nota 10, atendimento ao cliente nota 10 e muito profissionalismo. Recomendo de olhos fechados"
                    imgSrc="/clientes/5.jpg"
                    imgAlt="lalala"
                    name="André Ipsum"
                    date="5 de Novembro de 2025"
                />
                <CardStatements
                    review="Simplesmente perfeito! Comprei um buquê para minha esposa e ela ficou encantada. As flores são de ótima qualidade, muito frescas e lindamente arranjadas. O atendimento é caloroso e prestativo. Preço justo e resultado espetacular. Recomendo!"
                    imgSrc="/clientes/6.jpg"
                    imgAlt="lalala"
                    name="Felipe Lorem"
                    date="5 de Novembro de 2025"
                />
                <CardStatements
                    review="Melhor floricultura da região! Fiz um arranjo especial para um velório e foi feito com delicadeza e respeito. A qualidade é excelente, o atendimento impecável e a equipe demonstra paixão pelo trabalho. Profissionalismo de verdade. Recomendo!"
                    imgSrc="/clientes/7.jpg"
                    imgAlt="lalala"
                    name="Bianca Ipsum"
                    date="5 de Novembro de 2025"
                />
            </Slider>
        </div>
  )
}

export default Depoimentos

/* TODO
    verificar certinho a responsividade dos cards
*/
