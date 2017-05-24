import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import UserListItemContainer from './UserListItemContainer'

class Conversations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conversations: [],
      loaded: false,
    }
    this.truncatedMessage = this.truncatedMessage.bind(this);
  }

  componentDidMount() {
    fetch('/conversations', {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        console.log(dataJson);
        this.setState({
          conversations: dataJson,
          loaded: true,
        });
      });
  }

  truncatedMessage(message){
    if(message.length>100) {
      return (message.substr(0, 100) + '...');
    } else {
      return message;
    }
  }

  render() {
    if (this.state.loaded === true) {
      return (
        <div className="ui comments container">
          <h3>Chat History</h3>
          <div className="max-width">
          <div className="ui section divider"></div>
            {this.state.conversations.map((conversation) =>
              <UserListItemContainer key={conversation.id} user={conversation.other} snippet={this.truncatedMessage(conversation.last_message.body)} linkto={`/chats/${conversation.id}`} blocked={conversation.blocked} />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>Chat History</div>
          Loading...
        </div>
      );
    }
  }
}

export default Conversations;
