import './App.css';

import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import UseCustomHookExample1 from './components/UseCustomHookExample1';
import UseCustomHookExample2 from './components/UseCustomHookExample2';

function App() {
  return (
    <div className='container mt-5'>
      <h1>Example #1</h1>
      <UseRefExample1 />
      <hr />
      <h1>Example #2</h1>
      <UseRefExample2 />
      <hr />
      <h1>Example #3</h1>
      <UseRefExample3 />
      <hr />
      <h1>Example #4</h1>
      <UseMemoExample />
      <hr />
      <h1>Example #5</h1>
      <UseCallbackExample />
      <hr />
      <h1>Example #6</h1>
      <UseCustomHookExample1 />
      <hr />
      <h1>Example #7</h1>
      <UseCustomHookExample2 />
    </div>
  );
}

export default App;
