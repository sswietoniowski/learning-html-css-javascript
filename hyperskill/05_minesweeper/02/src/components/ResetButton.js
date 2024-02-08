import React from "react";

const ResetButton = ({onResetGame}) => {
    return (
        <button className="reset-button" onClick={onResetGame}>
        <span role="img" aria-label="reset button">
            🔄
        </span>
        </button>
    );
}

export default ResetButton;