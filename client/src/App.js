import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Conversation from './Conversation';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  // TODO: remove this method and the app-intro dummy text below. just added here by Simon to test server connections.
  // componentDidMount() {
  //   fetch('/users', {
  //     accept: 'application/json',
  //   }).then(data => data.json())
  //     .then(dataJson => { this.setState({
  //       users: dataJson,
  //   })});
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div className="App-intro">
            Here is a json of user information:
            {this.state.users.map((user) =>
              <p key={user.id}>{user.name}</p>
            )}
          </div>
          <Route path="/chats/:id" component={Conversation} />
        </div>
      </Router>
    );
  }
}

export default App;
