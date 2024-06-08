import React from "react";
import "./NewGameButton.css";

export default function NewGameButton({ handleNewGame }) {


  return (
      <button className=" btn btn-primary btn-lg text-nowrap" onClick={handleNewGame}>New Game</button>
  );
}