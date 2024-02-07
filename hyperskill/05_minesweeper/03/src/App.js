import React from 'react';
import './App.css';
import Minesweeper from "./components/Minesweeper";
import Spinner from "./components/Spinner";

function App() {
    const isReady = true;

    const rows = 9;
    const columns = 8;
    const minesQuantity = 10;

    return (
        <div className="App">
            <header className="App-header">
                {isReady ? <Minesweeper rows={rows} columns={columns} minesQuantity={minesQuantity}/> : <Spinner/>}
            </header>
        </div>
    );
}

export default App;
