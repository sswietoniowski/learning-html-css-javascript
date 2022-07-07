function App() {
  return (
    // <> is a fragment, we could use <div> instead, but there must be one parent element
    // we're using className instead class because class is a reserved word in javascript
    // we're using htmlFor instead for because it's a reserved word in javascript
    <div className='container'>
      <h1>Hello from the app component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
        voluptatem. Tempore dicta distinctio fuga iure fugit voluptas ipsa
        accusantium non.
      </p>
      <label htmlFor=''></label>
    </div>
  );
}

export default App;
