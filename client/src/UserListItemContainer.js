import React, { Component } from 'react';

class UserListItemContainer extends Component {
  render() {
    return (
      <li><div><Link to={this.props.linkto}>{this.props.user.imageurl} - {this.props.user.name}</Link></div>
      <div>{this.props.snippet}</div></li>
    );
  }
}

export default UserListItemContainer;
