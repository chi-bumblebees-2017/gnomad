import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Conversation from './Conversation';
import Conversations from './Conversations';

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
          <Route path="/chats/:id" component={Conversation} />
          <Route path="/chats" component={Conversations} />
        </div>
      </Router>
    );
  }
}

export default App;
