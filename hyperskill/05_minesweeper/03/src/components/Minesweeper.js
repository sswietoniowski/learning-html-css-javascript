import React, {useEffect, useState} from "react";

import Field from "./Field";
import ControlPanel from "./ControlPanel";
import GameTitle from "./GameTitle";

const generateField = (rows, columns, minesQuantity) => {
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

    const countNeighbours = (field, x, y) => {
        let count = 0;
        for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, rows - 1); i++) {
            for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, columns - 1); j++) {
                if (field[i][j].isMine) {
                    count++;
                }
            }
        }
        return count;
    }

    const countAllNeighbours = (field) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                field[i][j].neighbours = countNeighbours(field, i, j);
            }
        }
    }

    const field = [];
    for (let i = 0; i < rows; i++) {
        field[i] = [];
        for (let j = 0; j < columns; j++) {
            field[i][j] = {
                isRevealed: false, isMine: false, isFlagged: false, x: i + 1, y: j + 1,
                neighbours: 0
            };
        }
    }

    placeMines(field, minesQuantity)
    countAllNeighbours(field);

    return field;
}

const Minesweeper = ({rows, columns, minesQuantity}) => {
    const [gameOver, setGameOver] = useState(false);
    const [flags, setFlags] = useState(minesQuantity);
    const [time, setTime] = useState(0);
    const [field, setField] = useState(generateField(rows, columns, minesQuantity));

    const timeIntervalInMilliseconds = 1000;
    useEffect(() => {
        if (gameOver) {
            return;
        }

        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + timeIntervalInMilliseconds);
        }, timeIntervalInMilliseconds);

        return () => clearInterval(intervalId);
    }, [gameOver]);

    const resetGame = () => {
        setGameOver(false);
        setFlags(minesQuantity);
        setTime(0);
        setField(generateField(rows, columns, minesQuantity));
    }

    const onResetGame = () => {
        console.log("reset game");

        resetGame();
    };

    const revealEmptyCells = (field, x, y) => {
        for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, rows - 1); i++) {
            for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, columns - 1); j++) {
                if (!field[i][j].isRevealed) {
                    field[i][j].isRevealed = true;
                    if (field[i][j].neighbours === 0) {
                        revealEmptyCells(field, i, j);
                    }
                }
            }
        }
    }

    const revealEverything = (field) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                field[i][j].isRevealed = true;
            }
        }
    }

    const onCellClick = (x, y) => {
        if (gameOver) {
            return;
        }

        console.log(`clicked on cell ${x} ${y}`);

        const newField = field.slice();

        newField[x - 1][y - 1].isRevealed = true;

        if (newField[x - 1][y - 1].isMine) {
            console.log("game over");

            revealEverything(newField);
            setGameOver(true);
        }

        if (newField[x - 1][y - 1].neighbours === 0) {
            revealEmptyCells(newField, x - 1, y - 1);
        }

        setField(newField);
    };

    const onCellContext = (x, y) => {
        if (gameOver) {
            return;
        }

        console.log(`context on cell ${x} ${y}`);

        const newField = field.slice();

        if (newField[x - 1][y - 1].isFlagged) {
            newField[x - 1][y - 1].isFlagged = false;
            setFlags(prevFlags => prevFlags + 1);
        } else if (flags > 0) {
            newField[x - 1][y - 1].isFlagged = true;
            setFlags(prevFlags => prevFlags - 1);
        }

        setField(newField);

    };

    return (
        <div className="minesweeper">
            <GameTitle/>
            <ControlPanel flags={flags} time={time} onResetGame={onResetGame}/>
            <Field field={field} onCellClick={onCellClick} onCellContext={onCellContext}/>
        </div>
    );
}

export default Minesweeper;