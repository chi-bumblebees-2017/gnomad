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
    this.state = {
      conversations: [],
      loaded: false,
    }
  }

  componentDidMount() {
    fetch('/conversations', {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token'),
        'Limit': '3',
      },
    })
    .then(data => data.json())
      .then(dataJson => {
        this.setState({
          conversations: dataJson,
          loaded: true,
        });
      });
    }

  render() {
    if (this.state.loaded === true) {
      return (
        <div className="ui comments container">
          <h5>Recent Chats</h5>
          <div className="max-width">
            <div className="ui section divider"></div>
            {this.state.conversations.map((conversation) =>
              <UserListItemContainer key={conversation.id} user={conversation.other} snippet={conversation.last_message.body} linkto={`/chats/${conversation.id}`} />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h5>Recent Chats</h5>
          <span>Internet gnomes are fetching your info...</span>
        </div>
      );
    }
  }
}

export default RecentChats;
}
