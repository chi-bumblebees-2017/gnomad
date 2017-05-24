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
          <div className="App max-width">
            <NavBar options={4}>
              <NavLink className="item" to="/account">Dashboard</NavLink>
              <NavLink className="item" to="/chats">Chats</NavLink>
              <NavLink className="item" to="/search">Search</NavLink>
              <NavLink className="item" to="/logout">Logout</NavLink>
            </NavBar>
            <Route exact path="/" render={() => <Login connectCable={this.connectCable} loginHandler={this.setLoggedIn} />} />
            <Route exact path="/chats" component={Conversations} />
            <Route path="/chats/:id" render={props => <Conversation cable={this.state.cable} {...props} />} />
            <Route path="/register" component={NewProfile} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/users/:name/:id" component={Profile} />
            <Route path="/logout" render={() => <Logout disconnectCable={this.disconnectCable} logoutHandler={this.setLoggedOut} />} />
            <Route path="/account" component={Dashboard} />
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
            <Route exact path="/" render={() => <Login connectCable={this.connectCable} loginHandler={this.setLoggedIn} />} />
            <Route exact path="/chats" component={Conversations} />
            <Route path="/chats/:id" render={props => <Conversation cable={this.state.cable} {...props} />} />
            <Route path="/register" component={NewProfile} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/users/:name/:id" component={Profile} />
            <Route path="/logout" render={() => <Logout disconnectCable={this.disconnectCable} />} />
            <Route path="/account" component={Dashboard} />
          </div>
        </Router>
      );
    }
  }
}

export default App;
