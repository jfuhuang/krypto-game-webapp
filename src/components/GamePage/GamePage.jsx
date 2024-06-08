import NewGameButton from './NewGameButton/NewGameButton.jsx';
import PlayingCard from 'components/PlayingCard.jsx';
import GameCards from 'components/GameCards.jsx';
import NumberMoves from './NumberMoves/NumberMoves.jsx';
import Timer from './Timer/Timer.jsx';
import './GamePage.css';
import {useState} from 'react';
import {generateCards, generateDefaultCards} from 'utils/cardUtils.js';

export default function GamePage() {
    const [isRunning, setIsRunning] = useState(false);
    const [hundredths, setHundredths] = useState(0);
    const [numberMoves, setNumberMoves] = useState(0);
    const [cards, setCards] = useState(generateDefaultCards());
    const [targetCard, setTargetCard] = useState({name: "unknown", value: 0});

    const handleNewGame = () => {
        setIsRunning(true);
        setHundredths(0);
        setNumberMoves(0);
        setCards(generateCards(5));
        setTargetCard(generateCards(1)[0]);
    }

    return (
        <div className="GamePage container-fluid">
            <div className="TopContainer mt-4 align-items-center w-100 row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <NumberMoves numberMoves={numberMoves}/>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <NewGameButton  handleNewGame={handleNewGame}/>
                </div>
                <div className="timerContainer col-4 d-flex justify-content-center align-items-center">
                    <Timer isRunning={isRunning} hundredths={hundredths} setHundredths={setHundredths}/>
                </div>
            </div>
            <div className="PlayingCards m-0 w-100 flex-column align-items-center row">
                <div className="TargetCard p-0 m-0 col row">
                    <p className="p-0 text-primary text-center display-4">Target</p>
                    <PlayingCard cardData = {targetCard} isInteractive={false} card={targetCard} cardDimensions ={{width: "8.4375rem", height: "12.4375rem"}}/>
                </div>
                    <GameCards isRunning={isRunning} cards={cards}/>
            </div>
        </div>
    )
}
