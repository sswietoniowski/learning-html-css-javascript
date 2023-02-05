import './App.css';

import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';

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
    </div>
  );
}

export default App;
