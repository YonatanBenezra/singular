import React from 'react'
import './cardsgame.css'
import Carousel from "./carousel";
const CardsGame = () => {
    return (
        <div className='carousel-container'>
            <h1 className='carousel-title'>Tell us the story of your life in six pictures</h1>
            <Carousel />
        </div>
    )
}

export default CardsGame