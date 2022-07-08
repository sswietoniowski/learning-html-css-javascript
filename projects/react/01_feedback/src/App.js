import React from 'react';

function App() {
  const title = 'Blog Post';
  const body = 'My blog post body';
  const comments = [
    { id: 1, author: 'Bobby', text: 'This is my first comment' },
    { id: 2, author: 'Sally', text: 'This is my second comment' },
    { id: 3, author: 'Sue', text: 'This is my third comment' },
  ];

  return (
    // using dynamic values in JSX
    // using lists in JSX
    // we're using key instead of id
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>
      <label htmlFor=''></label>
      {Math.random() * (5 + 5)}
      <div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.id}>
              <p>{comment.text}</p>
              <p>{comment.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
