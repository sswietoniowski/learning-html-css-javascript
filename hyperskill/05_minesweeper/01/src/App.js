import React from 'react';
import bomb from './bomb.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bomb} className="App-logo" alt="logo" />
        <p>
          Minesweeper is loading...
        </p>
      </header>
    </div>
  );
}

export default App;
