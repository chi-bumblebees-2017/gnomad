import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class UserListItemContainer extends Component {
  render() {
    return (
      <li><div><Link to={this.props.linkto}>
      <img src={this.props.user.image_url} className="profile-list-item" />{this.props.user.first_name}</Link></div>
      <div>{this.props.snippet}</div></li>
    );
  }
}

export default UserListItemContainer;
