// Playing Card for Krypto Game.
// This component is used to display a playing card in the game.
function PlayingCard({card}) {
    const imagePath = `./images/cards/Krypto Cards/${card.name}.png`;
    const cardContainerStyle = {
        height: card.height,
        width: card.width,
        maxWidth: 200,
        maxHeight: 300,
    }
    return (
        <div className= {`card-container`} style={cardContainerStyle}>
            <img className="img-fluid" src={imagePath} alt={card.name} />
        </div>
    );
}

export default PlayingCard;