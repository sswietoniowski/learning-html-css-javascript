import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
  let text = 'Hello World!';
  return (
    <>
      <Header text={text} />
      {/* <Header /> */}
      {/* <Header text={1} /> */}
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
