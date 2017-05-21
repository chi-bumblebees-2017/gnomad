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
  // TODO: figure out putting in current user's id into fetch route
  componentDidMount() {
    fetch('/users/20/conversations/', {
      accept: 'application/json',
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
              <UserListItemContainer key={conversation.id} user={conversation.initiator} snippet={conversation.last_message.body} linkto={conversation} />
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
