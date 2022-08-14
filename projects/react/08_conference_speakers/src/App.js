import Header from './components/Header';
import Speakers from './components/Speakers';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout startingTheme='light'>
      <Header />
      <Speakers />
    </Layout>
  );
};

export default App;
