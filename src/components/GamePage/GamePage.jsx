import StartButton from './StartButton/StartButton.jsx';
import PlayingCard from 'components/PlayingCard.jsx';
import GameCards from 'components/GameCards.jsx';
import './GamePage.css';
function GamePage(){
    return (
        <div className="GamePage">
            <StartButton/>
            <PlayingCard card={{name: "unknown", width: "8.4375rem", height: "12.4375rem"}}/>
            <GameCards />
        </div>
    )
}

export default GamePage;