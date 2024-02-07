import React from "react";

function formatTimeInterval(timeIntervalMilliseconds) {
    const totalSeconds = Math.floor(timeIntervalMilliseconds / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const minutesStr = String(minutes);
    const secondsStr = String(seconds).padStart(2, '0');

    return `${minutesStr}:${secondsStr}`;
}

const Timer = ({time}) => {
    return (
        <div className="timer">
            <span>{formatTimeInterval(time)}</span>
        </div>
    );
}

export default Timer;