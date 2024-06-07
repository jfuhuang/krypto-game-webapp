import PlayingCard from "components/PlayingCard";
import './GameCards.css';
export default function GameCards() {
    // Generate an array of card components
    const cards = [];
    for(let i = 0; i < 5; i++){
        // Add your card rendering logic here
        cards.push(<PlayingCard card={{name: "unknown", width: "8.4375rem", height: "12.4375rem"}}/>);
    }

    return (<div className="cardsContainer">
        {cards}
    </div>)
}