import { useState, useEffect, useRef } from 'react';

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({ title: '' });
  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      // file deepcode ignore PromiseNotCaughtGeneral: this is just a demo code
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (!isMounted.current) return;
          setLoading(false);
          setTodo(data);
        }, 3000);
      });

    // Runs when component unmounts
    return () => {
      console.log('Unmounted');
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>;
};

export default Todo;
