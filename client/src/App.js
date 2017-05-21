import React, { Component } from 'react';
import './App.css';
import Conversation from './Conversation';
import Conversations from './Conversations';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
          <Route exact path="/" component={Login} />
          <Route path="/chats" component={Conversations} />
          <Route path="/chats/:id" component={Conversation} />
{/*       <Route path="/account" component={Dashboard} />       */}
{/*       <Route path="/register" component={NewProfile} />     */}
{/*       <Route path="/search" component={SearchContainer} />  */}
{/*       <Route path="/logout" component={Logout} />           */}
{/*       <Route path="/users/:name/:id" component={Profile} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
