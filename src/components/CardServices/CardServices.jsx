import React from 'react'
import './CardServices.css'

const CardServices = ({
    imgSrc,
    imgAlt,
    bgColor,
    subtitle
}) => {
  return (
    <section className='services-component' >

        <div className='services-container' style={{backgroundColor:bgColor}}>
                <img src={imgSrc} alt={imgAlt} className="card-img" />
        </div>

        <p>{subtitle}</p>

    </section>
    
  
)
}

export default CardServices
