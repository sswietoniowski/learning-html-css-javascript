import React from "react";

import Cell from "./Cell";

const Row = ({ row, onCellClick, onCellContext }) => {
    return (
        <>
        {row.map((cell, _) => (
            <Cell
            key={cell.x * row.length + cell.y}
            cell={cell}
            onCellClick={onCellClick}
            onCellContext={onCellContext}
            />
        ))}
        </>
    );
}

export default Row;