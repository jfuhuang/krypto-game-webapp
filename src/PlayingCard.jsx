// Playing Card for Krypto Game.
// This component is used to display a playing card in the game.
function PlayingCard({ card }) {
    const imagePath = `./images/cards/${card.name}.png`;

    return (
        <div className="playing-card">
            <img src={imagePath} alt={card.name} />
        </div>
    );
}

export default PlayingCard;