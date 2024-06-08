import React from 'react';
import './Header.css';
import PlayingCard from 'components/PlayingCard.jsx';

function Header() {

    const initialCard1 = {id: 1, value: 1, name: "ace"};
    const initialCard2 = {id: 2, value: 1, name: "ace"};

    return (
        <header className="p-0">
            <h1 className="m-5 p-0 display-1 text-center">Krypto<br /> The Card Game</h1>
            <div style = {{gap: "100px"}} className="cards d-flex align-items-center justify-content-center flex-nowrap m-0 p-0 w-100">
                <PlayingCard cardData={initialCard1} cardDimensions = {{width: "12.1875rem", height: "17.75rem"}} isInteractive = {true}/>
                <PlayingCard cardData={initialCard2} cardDimensions = {{width: "12.1875rem", height: "17.75rem"}} isInteractive = {true}/>
            </div>
        </header>
    );
}

export default Header;