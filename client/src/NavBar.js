import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="navbar ui pointing secondary compact menu">
        {this.props.children}
      </div>
    );
  }
}

export default NavBar;
