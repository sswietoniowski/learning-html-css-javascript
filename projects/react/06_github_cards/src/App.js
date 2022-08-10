import './App.css';
import { Component } from 'react';
import axios from 'axios';

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
  state = {
    userName: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.state.userName);
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    // console.log(response.data);
    this.props.onSubmit(response.data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='GitHub username'
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
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
    profiles: [],
  };

  addNewProfile = (profileData) => {
    // console.log(profileData);
    this.setState((prevState) => {
      return {
        profiles: [...prevState.profiles, profileData],
      };
    });
  };

  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
