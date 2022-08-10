import './App.css';
import { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className='github-profile'>
        <img src='https://placehold.it/75' alt='' />
        <div className='info'>
          <div className='name'>Name here</div>
          <div className='company'>Company here</div>
        </div>
      </div>
    );
  }
}

// const App = ({ title }) => <div className='header'>{title}</div>;

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

export default App;
