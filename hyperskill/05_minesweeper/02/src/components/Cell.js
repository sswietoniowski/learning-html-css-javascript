import React from "react";

const Cell = ({cell, onCellClick, onCellContext}) => {
    return (
        <div
            className="cell"
            onClick={() => onCellClick(cell.x, cell.y)}
            onContextMenu={(e) => {
                e.preventDefault();
                onCellContext(cell.x, cell.y);
            }}
        >
            {cell.isRevealed && !cell.isMine && cell.neighbour === 0
                ? ""
                : cell.isRevealed && !cell.isMine
                    ? cell.neighbour
                    : cell.isRevealed && cell.isMine
                        ? "💣"
                        : cell.isFlagged
                            ? "🚩"
                            : ""}
        </div>
    );
}

export default Cell;