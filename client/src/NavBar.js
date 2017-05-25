import React, { Component } from 'react';
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
        <Menu ui compact fluid pointing secondary color="blue" fixed="top" widths={this.props.options} id="navbar">
          {this.props.children}
        </Menu>
      </div>
    );
  }
}

export default NavBar;
