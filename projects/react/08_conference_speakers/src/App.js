import { useState } from 'react';

import Header from './components/Header';
import Speakers from './components/Speakers';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === 'light' ? 'container-fluid light' : 'container-fluid dark'
        }
      >
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
