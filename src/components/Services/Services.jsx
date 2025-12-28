import React from 'react'
import CardServices from '../CardServices/CardServices'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Services.css'



function Services() {
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
        <div className='container-servicos'>

            <h1> Nossos Serviços </h1>

        <Slider {...settings}>
        <CardServices
            imgSrc="/flores/1.png"
            imgAlt="teste"
            bgColor="#F19EB9"
            subtitle="Buquês personalizados"    
        />

        <CardServices
            imgSrc="/flores/2.png"
            imgAlt="teste"
            bgColor="#fee1d4"
            subtitle="Eventos"    
        />

        <CardServices
            imgSrc="/flores/3.png"
            imgAlt="teste"
            bgColor="#caebec"
            subtitle="Datas comemorativas"    
        />

        <CardServices
            imgSrc="/flores/4.png"
            imgAlt="teste"
            bgColor="#ffcfc2"
            subtitle="Planos mnsais"    
        />

        <CardServices
            imgSrc="/flores/5.png"
            imgAlt="teste"
            bgColor="#e4f8d6"
            subtitle="Buquês sla oq "    
        />
    </Slider>
    </div>
  )
}

export default Services

