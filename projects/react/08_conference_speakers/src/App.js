import { useState } from 'react';

import Header from './components/Header';
import Speakers from './components/Speakers';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div
      className={
        theme === 'light' ? 'container-fluid light' : 'container-fluid dark'
      }
    >
      <Header theme={theme} />
      <Speakers theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
