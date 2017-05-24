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
      <div className="clear-fixed">
        <Menu compact fluid pointing secondary color="blue" fixed="top" widths={this.props.options} id="navbar">
          {this.props.children}
        </Menu>
      </div>
    );
  }
}

export default NavBar;
