import React, {useEffect } from 'react';
import './Timer.css';
export default function Timer({ isRunning, hundredths, setHundredths }) {
    useEffect(() => {
      let interval = null;
      if (isRunning) {
        interval = setInterval(() => {
          setHundredths(hundredths => hundredths + 1);
        }, 10);
      } else if (!isRunning && hundredths !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isRunning, hundredths]);
  
    return (
      <div className="timer">
        <p className="text-primary display-2 text-nowrap">Timer:</p>
        <div className="timer-value">
          <p className="text-primary display-2">{(hundredths / 100.00).toFixed(2)} seconds</p>
        </div>
      </div>
    );
  }