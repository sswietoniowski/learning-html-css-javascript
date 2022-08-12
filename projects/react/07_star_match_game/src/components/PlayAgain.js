const PlayAgain = ({ stars, onClick }) => {
  return (
    <div className='game-done'>
      <div className='message' style={{ color: stars > 1 ? 'green' : 'red' }}>
        {stars > 1 ? 'Nice' : 'Game Over'}
      </div>
      <button onClick={() => onClick()}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
