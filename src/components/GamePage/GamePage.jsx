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
import { createCardObject } from 'utils/cardUtils.js';
import UndoButton from './UndoButton/UndoButton.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        setMoves([]);
    }


    useEffect(() => {
        if (selectedCards.length === 2) {
            const card1 = document.getElementById(selectedCards[0]);
            const rect1 = card1.getBoundingClientRect();

            const card2 = document.getElementById(selectedCards[1]);
            const rect2 = card2.getBoundingClientRect();

            const leftX1 = rect1.left;
            const centerY = rect1.top + rect1.height / 2;

            const rightX2 = rect2.right;


            const midX = (leftX1 + rightX2) / 2;
            const midY = (centerY);
            setOperationSelectorPosition({ top: midY, left: midX - 70 });
        }
    }, [selectedCards]);

    useEffect(() => {
        if (cards.length === 1 && cards[0].value === targetCard.value) {
            gameOver();
        }
    }, [cards, targetCard]);

    const onOperationSelect = (operation) => {

        const card1 = cards.find(card => card.id === selectedCards[0]);
        const card2 = cards.find(card => card.id === selectedCards[1]);

        let value = 0;
        switch (operation) {
            case 'add':
                value = card1.value + card2.value;
                break;
            case 'subtract':
                value = card1.value - card2.value;
                break;
            case 'multiply':
                value = card1.value * card2.value;
                break;
            case 'divide':
                value = card1.value / card2.value;
                break;
            default:
                break;
        }
        let newCard = createCardObject(value);

        const newMove = {
            card1: card1,
            card2: card2,
            operation: operation,
            result: newCard
        };

        setMoves([...moves, newMove]);
        performMove(newMove);
        if (newCard.value === targetCard.value && cards.length === 1) {
            gameOver();
        }
    };

    const performMove = (move) => {
        const newCard = move.result;
        const newCards = cards.filter(card => card.id !== selectedCards[0] && card.id !== selectedCards[1]);

        setCards([...newCards, newCard]);

        setSelectedCards([]);
        setNumberMoves(numberMoves + 1);


    }

    const undoMove = () => {
        if (moves.length > 0) {
            const lastMove = moves.pop();
            const newCards = cards.filter(card => card.id !== lastMove.result.id);
            setCards([...newCards, lastMove.card1, lastMove.card2]);
        }
    }


    const gameOver = () => {
        setIsRunning(false);
        toast("Congratulations! You have won the game!", { type: "success" })
    }



    return (
        <div className="GamePage container-fluid">
            <div className="TopContainer mt-4 align-items-center w-100 row">
                <div className="col-4 p-0 d-flex justify-content-center align-items-center">
                    <NumberMoves numberMoves={numberMoves} />
                </div>
                <div style={{ gap: "15px" }} className="col-4 p-0 d-flex justify-content-center align-items-center">
                    <NewGameButton handleNewGame={handleNewGame} />
                    <UndoButton onUndo={isRunning? undoMove : null} />
                </div>
                <div className="timerContainer p-0 col-4 d-flex justify-content-center align-items-center">
                    <Timer isRunning={isRunning} hundredths={hundredths} setHundredths={setHundredths} />
                </div>
            </div>
            {selectedCards.length === 2 && (
                <OperationSelector
                    location={{ top: operationSelectorPosition.top - 250, left: operationSelectorPosition.left }}
                    onOperationSelect={onOperationSelect}
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
