import NewGameButton from './NewGameButton/NewGameButton.jsx';
import PlayingCard from 'components/PlayingCard.jsx';
import GameCards from 'components/GameCards.jsx';
import NumberMoves from './NumberMoves/NumberMoves.jsx';
import Timer from './Timer/Timer.jsx';
import OperationSelector from 'components/OperationSelector/OperationSelector.jsx';
import './GamePage.css';
import { useState } from 'react';
import { generateCards, generateDefaultCards } from 'utils/cardUtils.js';
import React, { useEffect } from 'react';

export default function GamePage() {
    const [isRunning, setIsRunning] = useState(false);
    const [hundredths, setHundredths] = useState(0);
    const [numberMoves, setNumberMoves] = useState(0);
    const [cards, setCards] = useState(generateDefaultCards());
    const [targetCard, setTargetCard] = useState({ name: "unknown", value: 0 });
    const [moves, setMoves] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [operationSelectorPosition, setOperationSelectorPosition] = useState({ top: 0, left: 0 });

    const handleNewGame = () => {
        setIsRunning(true);
        setHundredths(0);
        setNumberMoves(0);
        setCards(generateCards(5));
        setTargetCard(generateCards(1)[0]);
        setSelectedCards([]);
    }


    useEffect(() => {
        if (selectedCards.length === 2) {
            console.log(selectedCards[0], selectedCards[1]);
            const card1 = document.getElementById(selectedCards[0]);
            const rect1 = card1.getBoundingClientRect();

            const card2 = document.getElementById(selectedCards[1]);
            const rect2 = card2.getBoundingClientRect();

            const leftX1 = rect1.left;
            const centerY1 = rect1.top + rect1.height / 2;

            const rightX2 = rect2.right;
            const centerY2 = rect2.top + rect2.height / 2;


            const midX = (leftX1 + rightX2) / 2;
            const midY = (centerY1);

            console.log(midX, midY);
            setOperationSelectorPosition({ top: midY, left: midX - 70});

        }
    }, [selectedCards]);

    return (
        <div className="GamePage container-fluid">
            <div className="TopContainer mt-4 align-items-center w-100 row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <NumberMoves numberMoves={numberMoves} />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <NewGameButton handleNewGame={handleNewGame} />
                </div>
                <div className="timerContainer col-4 d-flex justify-content-center align-items-center">
                    <Timer isRunning={isRunning} hundredths={hundredths} setHundredths={setHundredths} />
                </div>
            </div>
            {selectedCards.length === 2 && (
                <OperationSelector
                    location={{top: operationSelectorPosition.top - 250, left: operationSelectorPosition.left}}
                    onOperationSelect={() => { }}
                />
            )}
            <div className="PlayingCards m-0 w-100 flex-column align-items-center row">
                <div className="TargetCard p-0 m-0 col row align-items-center justify-content-center">
                    <p className="p-0 text-primary text-center display-4">Target</p>
                    <PlayingCard cardData={targetCard} isInteractive={false} card={targetCard} cardDimensions={{ width: "8.4375rem", height: "12.4375rem" }} />
                </div>
                <GameCards isRunning={isRunning} cards={cards} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />

            </div>
        </div>
    )
}
