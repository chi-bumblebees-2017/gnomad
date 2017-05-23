import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="clear-navbar">
      <Menu pointing secondary fixed="true" color="blue" inverted fluid widths={4} compact>
        {this.props.children}
      </Menu>
      </div>
    );
  }
}

export default NavBar;
