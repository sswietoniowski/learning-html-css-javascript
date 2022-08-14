import { createContext, useState } from 'react';

import ThemeContext from '../context/ThemeContext';

const Layout = ({ startingTheme, children }) => {
  const [theme, setTheme] = useState(startingTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === 'light' ? 'container-fluid light' : 'container-fluid dark'
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
