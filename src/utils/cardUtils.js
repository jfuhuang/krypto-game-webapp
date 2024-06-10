import { v4 as uuidv4 } from 'uuid';

export function generateCardValues(numberOfCards) {
    const cardValues = [];
    for (let i = 0; i < numberOfCards; i++) {
        // Generate a random number for each card
        const value = Math.floor(Math.random() * 13) + 1; // Random number between 1 and 14
        cardValues.push(value);
    }
    return cardValues;
}

export function createCardObject(value) {
    // Make name of card based on value
    let name = value;
    if (value === 1) {
        name = "ace";
    } else if (value === 11) {
        name = "jack";
    } else if (value === 12) {
        name = "queen";
    } else if (value === 13) {
        name = "king";
    } else if (value === 14) {
        name = "ace";
    }
    // Generate a unique ID for each card
    const id = uuidv4();
    return { id: id, value: value, name: name };
}

export function generateCards(numberOfCards) {
    const cardValues = generateCardValues(numberOfCards);
    const cards = cardValues.map(value => createCardObject(value));
    return cards;
}

export function generateDefaultCards() {
    // Generates five unknown cards
    const defaultCards = [];
    for (let i = 0; i < 5; i++) {
        defaultCards.push({ id: uuidv4(), value: 0, name: "unknown" });
    }
    return defaultCards;
}