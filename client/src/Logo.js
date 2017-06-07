import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="clear-fixed">
        <Menu ui compact fluid pointing secondary color="blue" fixed="top" widths={this.props.options} id="logo">
          {this.props.children}
        </Menu>
      </div>
    );
  }
}

export default Logo;
