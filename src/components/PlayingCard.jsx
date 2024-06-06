// Playing Card for Krypto Game.
// This component is used to display a playing card in the game.
function PlayingCard({ card, width  , height }) {
    const style = {
        width: width,
        height: height,
    }

    const imagePath = `./images/cards/${card.name}.png`;

    return (
        <div className="playing-card">
            <img style={style} src={imagePath} alt={card.name} />
        </div>
    );
}

export default PlayingCard;