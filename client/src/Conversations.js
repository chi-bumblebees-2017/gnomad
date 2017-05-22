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

  render() {
    if (this.state.loaded === true) {
      return (
        <div>
          <div>Chat History</div>
          <ul>
            {this.state.conversations.map((conversation) =>
              <UserListItemContainer key={conversation.id} user={conversation.other} snippet={conversation.last_message.body} linkto={`/chats/${conversation.id}`} />
            )}
          </ul>
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
