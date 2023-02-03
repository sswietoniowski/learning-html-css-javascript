import { useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current);
    console.log(inputRef.current?.value);

    if (inputRef.current === null) {
      return;
    }

    inputRef.current.value = '';
    inputRef.current.style.backgroundColor = 'red';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          className='form-control mb-2'
          id='name'
          placeholder='Enter your name...'
          ref={inputRef}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefExample1;
