import React, { Component } from 'react';
import UserListItemContainer from './UserListItemContainer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class RecentChats extends Component {
  render() {
    return (
      <div className="ui comments container">
        <h5>Recent Chats</h5>
        <div className="max-width">
          {this.props.conversations.map((conversation) =>
            <UserListItemContainer key={conversation.id} user={conversation.other} snippet={conversation.last_message.body.substr(0, 80)} linkto={`/chats/${conversation.id}`} />
          )}
        </div>
      </div>
    )
  }
}

export default RecentChats;
