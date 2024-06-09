import React, { useState } from 'react';
import PlayingCard from "components/PlayingCard";
import './GameCards.css';

export default function GameCards({cards, isRunning}) {
    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardSelect = (cardId) => {
        if (selectedCards.length < 2) {
            setSelectedCards([...selectedCards, cardId]);
        }
        if (selectedCards.length === 2) {
            // Trigger the popup here
        }
    }
    

    const handleCardDeselect = (cardId) => {
        setSelectedCards(selectedCards.filter(id => id !== cardId));
    }

    const playingCards = cards.map(card => {
        return (
            <PlayingCard 
                key={card.id} 
                cardData={card} 
                cardDimensions ={{width: "8.4375rem", height: "12.4375rem"}} 
                isInteractive={isRunning} 
                isSelected={selectedCards.includes(card.id)}
                onSelect={handleCardSelect}
                onDeselect={handleCardDeselect}
            />
        );
    });

    return (<div className="cardsContainer mt-5 d-flex container p-0">
        {playingCards}
    </div>)
}