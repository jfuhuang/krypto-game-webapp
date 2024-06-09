import NewGameButton from './NewGameButton/NewGameButton.jsx';
import PlayingCard from 'components/PlayingCard.jsx';
import GameCards from 'components/GameCards.jsx';
import NumberMoves from './NumberMoves/NumberMoves.jsx';
import Timer from './Timer/Timer.jsx';
import OperationSelector from 'components/OperationSelector/OperationSelector.jsx';
import './GamePage.css';
import {useState} from 'react';
import {generateCards, generateDefaultCards} from 'utils/cardUtils.js';

export default function GamePage() {
    const [isRunning, setIsRunning] = useState(false);
    const [hundredths, setHundredths] = useState(0);
    const [numberMoves, setNumberMoves] = useState(0);
    const [cards, setCards] = useState(generateDefaultCards());
    const [targetCard, setTargetCard] = useState({name: "unknown", value: 0});
    const [moves, setMoves] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const handleNewGame = () => {
        setIsRunning(true);
        setHundredths(0);
        setNumberMoves(0);
        setCards(generateCards(5));
        setTargetCard(generateCards(1)[0]);
        setSelectedCards([]);
    }

    let operationSelector = null;
    if (selectedCards.length === 2) {
        const card1 = document.getElementById(selectedCards[0].id);
        const card2 = document.getElementById(selectedCards[1].id);

        const x1 = card1.offsetLeft + card1.offsetWidth / 2;
        const y1 = card1.offsetTop + card1.offsetHeight / 2;
        const x2 = card2.offsetLeft + card2.offsetWidth / 2;
        const y2 = card2.offsetTop + card2.offsetHeight / 2;

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2 + 4 * 16; // 4rem lower, assuming 16px = 1rem

        operationSelector = (
            <OperationSelector style={{ position: 'absolute', left: midX, top: midY }} />
        );
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
                    <GameCards isRunning={isRunning} cards={cards} selectedCards={selectedCards} setSelectedCards={setSelectedCards}/>
                    {operationSelector}
            </div>
        </div>
    )
}
