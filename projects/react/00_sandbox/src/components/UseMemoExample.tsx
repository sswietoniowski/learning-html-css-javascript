import { useState, useEffect, useRef, useMemo } from 'react';

// use only if you have a heavy calculation or in general you've got performance issues

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [_, setIncrement] = useState(0);

  const getSqrt = (number: number) => {
    console.log('Executing heavy calculation...');
    let i = 0;
    while (i < 1000000000) i++;
    console.log("I'm done!");
    return Math.sqrt(number);
  };

  // const sqrt = getSqrt(number); // this will be executed every time the component re-renders
  const sqrt = useMemo(() => getSqrt(number), [number]); // this will be executed only when the number changes

  const renders = useRef(1);

  useEffect(() => {
    renders.current++;
  });

  const onClick = () => {
    setIncrement((previousState) => {
      console.log(previousState);
      return previousState + 1;
    });
  };

  return (
    <div>
      <input
        type='number'
        className='form-control w-25'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <h2 className='my-3'>
        Square root of {number} is {sqrt}
      </h2>
      <button className='btn btn-primary' onClick={onClick}>
        Re Render
      </button>
      <h3>{renders.current}</h3>
    </div>
  );
};

export default UseMemoExample;
