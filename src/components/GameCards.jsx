import React, { useState } from 'react';
import PlayingCard from "components/PlayingCard";
import './GameCards.css';
import OperationSelector from './OperationSelector/OperationSelector';

export default function GameCards({ cards, isRunning, selectedCards, setSelectedCards }) {

    const handleCardSelect = (cardId) => {
        if (selectedCards.length < 2) {
            setSelectedCards([...selectedCards, cardId]);
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
                cardDimensions={{ width: "8.4375rem", height: "12.4375rem" }}
                isInteractive={isRunning}
                isSelected={selectedCards.includes(card.id)}
                onSelect={handleCardSelect}
                onDeselect={handleCardDeselect}
            />
        );
    });

    return (
        <div style={ {gap: '12rem'} }className="cardsContainer justify-content-center fixed-bottom d-flex container p-0">
            {playingCards}
        </div>
    )
}