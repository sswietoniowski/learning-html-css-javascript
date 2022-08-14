import { useContext } from 'react';

import ThemeProvider, { ThemeContext } from '../contexts/ThemeContext';

const LayoutNoThemeProvider = ({ startingTheme, children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === 'light' ? 'container-fluid light' : 'container-fluid dark'
      }
    >
      {children}
    </div>
  );
};

const Layout = ({ startingTheme, children }) => {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider startingTheme={startingTheme}>
        {children}
      </LayoutNoThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
