import React from "react";

import bomb from "../bomb.svg";

const Spinner = () => {
    return (
        <>
            <img src={bomb} className="img" alt="logo"/>
            <p>
                Minesweeper is loading...
            </p>
        </>
    );
}

export default Spinner;