import PlayingCard from './../PlayingCard';
function Header() {
    const style = {
        WebkitTextStroke: '1px #000000',
        fontSize: '3em',
        textAlign: 'center',
        color: '#FFFD82',
        width: '50%',
        margin: '0px auto',
    };

    return (
        <header style={style}>
            <h1>Krypto The Card Game</h1>
            <PlayingCard card={{"name": "2", "width": "195px", "height": "284px"}}/>
        </header>
    )
}

export default Header;