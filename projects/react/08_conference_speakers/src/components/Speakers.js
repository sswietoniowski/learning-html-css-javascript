import Header from './Header';
import Toolbar from './Toolbar';
import SpeakersList from './SpeakersList';
import { data } from '../../SpeakerData';

const Speakers = () => {
  return (
    <div className='container-fluid'>
      <Header />
      <Toolbar />
      <SpeakersList data={data}/>
    </div>
  );
};

export default Speakers;
