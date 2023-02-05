import { useState } from 'react';
import Todo from './Todo';

const UseRefExample3 = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Todo />}
      <button onClick={() => setShow(!show)} className='btn btn-primary'>
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
