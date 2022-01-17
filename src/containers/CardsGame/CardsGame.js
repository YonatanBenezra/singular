import React, { useEffect, useState } from 'react'
import './cardsgame.css'
import Carousel from "./carousel";
import Cards from '../../data/cards-1.json'

const CardsGame = () => {
    const [cards, setCards] = useState(Cards)
    useEffect(() => {
        setCards(Cards)
    }, [])
    return (
        <div className='carousel-container'>
            <h1 className='carousel-title'>Tell us the story of your life in six pictures</h1>
            <Carousel cards={cards}/>
        </div>
    )
}

export default CardsGame