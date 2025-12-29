import React from 'react'
import { HiStar } from "react-icons/hi";
import './CardStatements.css'

const CardStatements = ({
    review,
    imgSrc,
    imgAlt,
    name,
    date
}) => {
  return (
    <div className='card-statements'>

        <div className='estrelas'>
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
        </div>

        <p className='review'>{review}</p>

        <div className='cliente-info'>
            <img src={imgSrc} alt={imgAlt} className='imagem'/>
            <div className='info'>
                <p className='nome'>{name}</p>
                <p className='data'>{date}</p>
            </div>
        </div>
    
    </div>
  )
}

export default CardStatements
