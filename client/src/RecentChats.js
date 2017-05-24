import React, { Component } from 'react';
import UserListItemContainer from './UserListItemContainer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class RecentChats extends Component {
  constructor(props) {
    super(props);
    this.truncatedMessage = this.truncatedMessage.bind(this);
  }

  truncatedMessage(message){
    if(message.length>100) {
      return (message.substr(0, 100) + '...');
    } else {
      return message;
    }
  }

  render() {
    return (
      <div className="ui comments container">
        <div className="max-width">
          <div className="ui horizontal section divider"><h3>Recent Chats</h3></div>
          {this.props.conversations.map((conversation) =>
            <UserListItemContainer key={conversation.id} user={conversation.other} snippet={this.truncatedMessage(conversation.last_message.body)} linkto={`/chats/${conversation.id}`} blocked={conversation.blocked}/>
          )}
        </div>
      </div>
    )
  }
}

export default RecentChats;
