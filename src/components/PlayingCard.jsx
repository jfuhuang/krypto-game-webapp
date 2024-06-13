// PlayingCard.jsx
import React from 'react';
import './PlayingCard.css';
import PropTypes from 'prop-types';

export default function PlayingCard({cardData, cardDimensions, isInteractive, isSelected, onSelect, onDeselect}) {
    const imagePath = `/images/Cards/${cardData.name}.png`;
    
    const cardContainerStyle = {
        height: cardDimensions.height,
        width: cardDimensions.width,
        padding: 0,
        cursor: isInteractive ? 'pointer' : 'default',
    }

    const select = () => {
        if (isSelected) {
            onDeselect(cardData.id);
        } else {
            onSelect(cardData.id);
        }
    }

    return (
        <div 
            className={`cardContainer m-0 container d-flex justify-content-center align-items-center ${isInteractive ? 'interactive' : ''} ${isSelected ? 'selected' : ''}`} 
            style={{...cardContainerStyle}}
            draggable={isInteractive}
            onClick={isInteractive ? select : null}
            id={cardData.id}

        >
            <img className="img-fluid" src={imagePath} alt={cardData.name} />
        </div>
    );
}

PlayingCard.propTypes = {
    cardData: PropTypes.object.isRequired,
    cardDimensions: PropTypes.shape({
        height: PropTypes.string,
        width: PropTypes.string
    }).isRequired,
    isInteractive: PropTypes.bool,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func
};

