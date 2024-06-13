import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayButton.css';
import { Link } from 'react-router-dom';

function PlayButton() {
    return (
        <Link role="button" className="btn btn-primary btn-lg custom-btn" to="/game">Play Game</Link>
    );
}
export default PlayButton;