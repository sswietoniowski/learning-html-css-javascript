const PlayAgain = ({ gameStatus, onClick }) => {
  return (
    <div className='game-done'>
      <div
        className='message'
        style={{ color: gameStatus === 'won' ? 'green' : 'red' }}
      >
        {gameStatus === 'won' ? 'Nice' : 'Game Over'}
      </div>
      <button onClick={() => onClick()}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
