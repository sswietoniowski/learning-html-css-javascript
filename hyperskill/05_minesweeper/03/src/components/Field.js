import React from "react";

import Row from "./Row";

const Field = ({field, onCellClick, onCellContext}) => {
    const rows = field.length;
    const columns = field[0].length;

    return (
        <div className="field" style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}>
            {field.map((row, rowIndex) => (
                <Row
                    key={rowIndex}
                    row={row}
                    onCellClick={onCellClick}
                    onCellContext={onCellContext}
                />
            ))}
        </div>
    );
}

export default Field;