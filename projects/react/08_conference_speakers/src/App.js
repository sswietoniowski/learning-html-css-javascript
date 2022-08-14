import Header from './components/Header';
import Speakers from './components/Speakers';
import LayoutNoThemeProvider from './components/Layout';

const App = () => {
  return (
    <LayoutNoThemeProvider startingTheme='light'>
      <Header />
      <Speakers />
    </LayoutNoThemeProvider>
  );
};

export default App;
