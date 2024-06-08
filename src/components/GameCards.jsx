import PlayingCard from "components/PlayingCard";
import './GameCards.css';

export default function GameCards({cards, isRunning}) {
    // Generate PlayingCards from cards array
    // if isRunning, then make the cards interactive.
    
    const playingCards = cards.map(card => {
        return <PlayingCard key={card.id} cardData={card} cardDimensions ={{width: "8.4375rem", height: "12.4375rem"}} isInteractive={isRunning} />
    });

    return (<div className="cardsContainer mt-5 d-flex container p-0">
        {playingCards}
    </div>)
}