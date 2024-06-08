// Import useState hook
import React, { useState, useEffect } from 'react';
import './NumberMoves.css'
export default function NumberMoves() {
    // Declare a new state variable, which we'll call "numberMoves"
    const [numberMoves, setNumberMoves] = useState(0);
    return (
        <div>
            <p className="numberMoves text-primary display-2 nowrap"># of moves:<br/> {numberMoves}</p>
        </div>
    );
}