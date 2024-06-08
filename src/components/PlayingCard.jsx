import React from 'react';
import './PlayingCard.css';

// Playing Card for Krypto Game.
// This component is used to display a playing card in the game.
export default function PlayingCard({cardData, cardDimensions, isInteractive}) {
    const imagePath = `./images/cards/${cardData.name}.png`;

    const cardContainerStyle = {
        height: cardDimensions.height,
        width: cardDimensions.width,
        maxWidth: 200,
        maxHeight: 300,
        padding: 0,
        cursor: isInteractive ? 'pointer' : 'default',
    }


    return (
        <div 
            className={`cardContainer container d-flex justify-content-center align-items-center ${isInteractive ? 'interactive' : ''}`} 
            style={{...cardContainerStyle}}
        >
            <img className="img-fluid" src={imagePath} alt={cardData.name} />
        </div>
    );
}