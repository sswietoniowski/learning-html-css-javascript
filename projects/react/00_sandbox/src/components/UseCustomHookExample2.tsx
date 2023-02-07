import { useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const UseCustomHookExample2 = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDelete = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {tasks.map((task: string, index: number) => (
          <li key={index}>
            {task} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseCustomHookExample2;
