import React, { Component } from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class UserListItemContainer extends Component {
  render() {
    return (
      <BlockUi tag='div' blocking={this.props.blocked} renderChildren={false}>
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
      </BlockUi>
    );
  }
}

export default UserListItemContainer;
