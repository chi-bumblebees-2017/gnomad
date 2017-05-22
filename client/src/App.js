import React, { Component } from 'react';
import './App.css';
import Conversation from './Conversation';
import Conversations from './Conversations';
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
import ActionCableProvider from 'react-actioncable-provider';

class App extends Component {
  render() {
    return (
      <ActionCableProvider url="ws://localhost:3001/cable">
        <Router>
          <div className="App">
            <NavBar>
              <NavLink to="/account">Dashboard</NavLink>
              <NavLink to="/chats">Chats</NavLink>
              <NavLink to="/search">Search</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </NavBar>
            <Route exact path="/" component={Login} />
            <Route exact path="/chats" component={Conversations} />
            <Route path="/chats/:id" component={Conversation} />
  {/*       <Route path="/account" component={Dashboard} />       */}
  {/*       <Route path="/register" component={NewProfile} />     */}
            <Route path="/search" component={SearchContainer} />
            <Route path="/logout" component={Logout} />
            <Route path="/users/:name/:id" component={Profile} />
          </div>
        </Router>
      </ActionCableProvider>
    );
  }
}

export default App;
