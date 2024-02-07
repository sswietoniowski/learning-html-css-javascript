import React, {useEffect, useState} from "react";

import Field from "./Field";
import ControlPanel from "./ControlPanel";
import GameTitle from "./GameTitle";

const Minesweeper = () => {
    const rows = 9;
    const columns = 8;
    const minesQuantity = 10;

    const [flags, setFlags] = useState(minesQuantity);
    const [time, setTime] = useState(0);

    // const timeIntervalInMilliseconds = 1000;
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setTime(prevTime => {
    //             if (prevTime <= 0) {
    //                 // TODO: Game over
    //                 clearInterval(intervalId);
    //                 return 0;
    //             } else {
    //                 return prevTime - timeIntervalInMilliseconds;
    //             }
    //         });
    //     }, timeIntervalInMilliseconds);
    //
    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(intervalId);
    // }, []);

    const placeMines = (field, minesQuantity) => {
        let i = 0;
        while (i < minesQuantity) {
            const x = Math.floor(Math.random() * rows);
            const y = Math.floor(Math.random() * columns);
            if (!field[x][y].isMine) {
                field[x][y].isMine = true;
                i++;
            }
        }
    }

    const generateField = (rows, columns, minesQuantity) => {
        const field = [];
        for (let i = 0; i < rows; i++) {
            field[i] = [];
            for (let j = 0; j < columns; j++) {
                field[i][j] = {
                    isRevealed: false, isMine: false, neighbour: 0, isFlagged: false, value: "empty", x: i + 1, y: j + 1
                };
            }
        }

        placeMines(field, minesQuantity)

        return field;
    }

    const field = generateField(rows, columns, minesQuantity);

    const onResetGame = () => {
        console.log("reset game");
    };

    const onCellClick = (x, y) => {
        console.log(`clicked on cell ${x} ${y}`);
    };

    const onCellContext = (x, y) => {
        console.log(`context on cell ${x} ${y}`);
    };

    return (
        <div className="minesweeper">
            <GameTitle />
            <ControlPanel flags={flags} time={time} onResetGame={onResetGame}/>
            <Field field={field} onCellClick={onCellClick} onCellContext={onCellContext}/>
        </div>
    );
}

export default Minesweeper;