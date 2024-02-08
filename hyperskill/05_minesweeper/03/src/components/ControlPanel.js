import React from "react";

import FlagsCounter from "./FlagsCounter";
import ResetButton from "./ResetButton";
import Timer from "./Timer";

const ControlPanel = ({flags, time, onResetGame}) => {
    return (
        <div className="control-panel">
            <FlagsCounter flags={flags}/>
            <ResetButton onResetGame={onResetGame}/>
            <Timer time={time}/>
        </div>
    );
}

export default ControlPanel;