import React, { Component } from 'react';
import './App.css';
import Conversation from './Conversation';
import Conversations from './Conversations';
import NewProfile from './NewProfile';
import NavBar from './NavBar';
import Login from './components/Login';
import Profile from './components/Profile';
import SearchContainer from './SearchContainer'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Link
} from 'react-router-dom';
import Logout from './components/Logout';
import ActionCable from 'action-cable-react-jwt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cable: null,
    };
    this.connectCable = this.connectCable.bind(this);
    this.disconnectCable = this.disconnectCable.bind(this);
  }
    // cable: ActionCable.createConsumer("ws://localhost:3001/cable", localStorage.getItem('gnomad-auth-token')),

  componentWillMount() {
    if (localStorage.getItem('gnomad-auth-token') && localStorage.getItem('gnomad-auth-token').length >= 1) {
      this.connectCable();
    }
  }

  componentWillUnmount() {
    this.state.cable.subscriptions.subscriptions.forEach((sub) => {
      this.state.cable.subscriptions.remove(sub)
    })
  }

  connectCable() {
    this.setState({
      cable: ActionCable.createConsumer("ws://localhost:3001/cable", localStorage.getItem('gnomad-auth-token')),
    })
  }

  disconnectCable() {
    this.setState({
      cable: null,
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar>
            <NavLink to="/account">Dashboard</NavLink>
            <NavLink to="/chats">Chats</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </NavBar>
          <Route exact path="/" render={() => <Login connectCable={this.connectCable} />} />
          <Route exact path="/chats" component={Conversations} />
          <Route path="/chats/:id" render={props => <Conversation cable={this.state.cable} {...props} />} />
{/*       <Route path="/account" component={Dashboard} />       */}
{/*       <Route path="/register" component={NewProfile} />     */}
          <Route path="/search" component={SearchContainer} />
          <Route path="/users/:name/:id" component={Profile} />
          <Route path="/logout" render={() => <Logout disconnectCable={this.disconnectCable} />} />
        </div>
      </Router>
    );
  }
}

export default App;
