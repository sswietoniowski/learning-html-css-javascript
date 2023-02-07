import React, { useState, useCallback } from 'react';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = useCallback(() => {
    setTasks((previousState) => [...previousState, 'New task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

interface ButtonProps {
  addTask: () => void;
}

const Button = React.memo<ButtonProps>(({ addTask }: ButtonProps) => {
  console.log('Button rendered');

  return (
    <button onClick={addTask} className='btn btn-primary'>
      Add task
    </button>
  );
});

export default UseCallbackExample;
