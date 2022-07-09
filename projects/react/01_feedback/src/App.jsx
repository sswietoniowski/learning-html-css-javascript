import Header from './components/Header';

function App() {
  let text = 'Hello World!';
  return (
    <>
      <Header text={text} />
      {/* <Header /> */}
      <div className='container'>
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;
