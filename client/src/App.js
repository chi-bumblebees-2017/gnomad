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

class App extends Component {
  render() {
    return (<div>
      <Router>
        <div className="App">
          <NavBar>
            <NavLink className="item" to="/account">Dashboard</NavLink>
            <NavLink className="item" to="/chats">Chats</NavLink>
            <NavLink className="item" to="/search">Search</NavLink>
            <NavLink className="item" to="/logout">Logout</NavLink>
          </NavBar>
          <Route exact path="/" component={Login} />
          <Route exact path="/chats" component={Conversations} />
          <Route path="/chats/:id" component={Conversation} />
          <Route path="/register" component={NewProfile} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/logout" component={Logout} />
          <Route path="/users/:name/:id" component={Profile} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
