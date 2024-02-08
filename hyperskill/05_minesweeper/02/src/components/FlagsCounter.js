import React from "react";

const FlagsCounter = ({flags}) => {
    return (
        <div className="flags-counter"><span role="img" aria-label="flag">🚩</span> {flags}</div>
    );
}

export default FlagsCounter;