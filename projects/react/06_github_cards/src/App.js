import './App.css';
import { Component } from 'react';
import { useState } from 'react';

const testData = [
  {
    id: 1,
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook',
  },
  {
    id: 2,
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu',
  },
  {
    id: 3,
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook',
  },
];

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

class Card extends Component {
  render() {
    return (
      <div className='github-profile' style={{ margin: '1rem' }}>
        <img src={this.props.avatar_url} alt='' />
        <div
          className='info'
          style={{ display: 'inline-block', marginLef: 10 }}
        >
          <div className='name' style={{ fontSize: '125%' }}>
            {this.props.name}
          </div>
          <div className='company'>{this.props.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <form action=''>
        <input type='text' placeholder='GitHub username' />
        <button>Add card</button>
      </form>
    );
  }
}

// const App = ({ title }) => <div className='header'>{title}</div>;

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }
  state = {
    profiles: testData,
  };

  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
