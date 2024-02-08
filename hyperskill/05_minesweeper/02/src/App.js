import React from 'react';
import './App.css';
import Minesweeper from "./components/Minesweeper";
import Spinner from "./components/Spinner";

function App() {
    const isReady = true;

  return (
    <div className="App">
      <header className="App-header">
          {isReady ? <Minesweeper /> : <Spinner />}
      </header>
    </div>
  );
}

export default App;
