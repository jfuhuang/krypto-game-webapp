import React from 'react';
import './Header.css';
import PlayingCard from 'components/PlayingCard.jsx';

function Header() {
    return (
        <header className="p-0">
            <h1 className="m-5 p-0 display-1 text-center">Krypto<br /> The Card Game</h1>
            <div style = {{gap: "100px"}} className="cards d-flex align-items-center justify-content-center flex-nowrap m-0 p-0 w-100">
                <PlayingCard card={{name: "ace"}}/>
                <PlayingCard card={{name: "ace"}}/>
            </div>
        </header>
    );
}

export default Header;