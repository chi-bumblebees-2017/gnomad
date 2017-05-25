import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserListItemContainer extends Component {
  render() {
    if (this.props.blocked === true) {
      return (<p></p>)
    }
    else {
      return (
          <div className="comment ui left aligned container">
            <div className="avatar">
              <img src={this.props.user.image_url} className="profile-list-item" />
            </div>
            <Link className="author left-pad-10" to={this.props.linkto}>{this.props.user.first_name}</Link>
            <div className="content">
              <div className="text">{this.props.snippet}</div>
            </div>
          <div className="ui section divider"></div>
          </div>
      );
    }
  }
}

export default UserListItemContainer;
