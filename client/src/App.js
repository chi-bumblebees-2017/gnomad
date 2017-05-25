import React, { Component } from 'react';
import './App.css';
import Conversation from './Conversation';
import Conversations from './Conversations';
import NewProfile from './NewProfile';
import NavBar from './NavBar';
import Login from './components/Login';
import Profile from './components/Profile';
import SearchContainer from './SearchContainer';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import Logout from './components/Logout';
import ActionCable from 'action-cable-react-jwt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cable: null,
      loggedIn: false,
    };
    this.connectCable = this.connectCable.bind(this);
    this.disconnectCable = this.disconnectCable.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.setLoggedOut = this.setLoggedOut.bind(this);
  }

  checkLogin() {
    return (localStorage.getItem('gnomad-auth-token') && localStorage.getItem('gnomad-auth-token').length >= 1)
  }

  setLoggedIn() {
    this.setState({
      loggedIn: true,
    })
  }
  setLoggedOut() {
    this.setState({
      loggedIn: false,
    })
  }
  componentDidMount() {
    if (this.checkLogin()) {
      this.connectCable();
      this.setLoggedIn()
    }
  }

  componentWillUnmount() {
    this.state.cable.subscriptions.subscriptions.forEach((sub) => {
      this.state.cable.subscriptions.remove(sub)
    })
  }

  connectCable() {
    let cableURL = ""
    if (window.location.href.includes("gnomad")){
      cableURL = "wss://gnomad.herokuapp.com/cable"
    } else{
      cableURL = "ws://localhost:3001/cable"
    }
    this.setState({
      cable: ActionCable.createConsumer(cableURL, localStorage.getItem('gnomad-auth-token')),
    })
  }

  disconnectCable() {
    this.setState({
      cable: null,
    })
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <Router>
          <div className="App">
            <NavBar options={4}>
              <NavLink className="item" to="/account">Dashboard</NavLink>
              <NavLink className="item" to="/chats">Chats</NavLink>
              <NavLink className="item" to="/search">Search</NavLink>
              <NavLink className="item" to="/logout">Logout</NavLink>
            </NavBar>
            <Route exact path="/" render={props => <Login connectCable={this.connectCable} loginHandler={this.setLoggedIn} />} />
            <Route exact path="/chats" render={props => <Conversations loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/chats/:id" render={props => <Conversation cable={this.state.cable} loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/register" render={props => <NewProfile loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/search" render={props => <SearchContainer loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/users/:name/:id" render={props => <Profile loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/logout" render={props => <Logout disconnectCable={this.disconnectCable} logoutHandler={this.setLoggedOut} {...props} />} />
            <Route path="/account" render={props => <Dashboard loggedIn={this.state.loggedIn} {...props} />} />
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <NavBar options={1}>
              <div></div>
            </NavBar>
            <Route exact path="/" render={props => <Login connectCable={this.connectCable} loginHandler={this.setLoggedIn} />} />
            <Route exact path="/chats" render={props => <Conversations loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/chats/:id" render={props => <Conversation cable={this.state.cable} loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/register" render={props => <NewProfile loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/search" render={props => <SearchContainer loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/users/:name/:id" render={props => <Profile loggedIn={this.state.loggedIn} {...props} />} />
            <Route path="/logout" render={props => <Logout disconnectCable={this.disconnectCable} logoutHandler={this.setLoggedOut} {...props} />} />
            <Route path="/account" render={props => <Dashboard loggedIn={this.state.loggedIn} {...props} />} />
          </div>
        </Router>
      );
    }
  }
}

export default App;
