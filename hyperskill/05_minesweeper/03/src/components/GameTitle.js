import React from "react";

import bomb from "../bomb.svg";

const GameTitle = () => {
    return (
        <div className="game-title">
        <p>Minesweeper <span role="img"><img src={bomb} alt="logo"/></span></p>
        </div>
    );
}

export default GameTitle;