import { useState, useEffect, useRef } from 'react';

const UseRefExample2 = () => {
  const [name, setName] = useState('');

  const renders = useRef(1);
  const previousName = useRef('');

  useEffect(() => {
    renders.current++;
    previousName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Previous name: {previousName.current}</h2>
      <input
        type='text'
        className='form-control mb-3'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UseRefExample2;
