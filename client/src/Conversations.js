import React, { Component } from 'react';

class Conversations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conversations: [],
    }
  }
  // TODO: figure out fetch route
  componentDidMount() {
    fetch('/conversations/', {
      accept: 'application/json',
    }).then(data => data.json())
      .then(dataJson => { this.setState({
        conversations: dataJson,
    })});
  }

  render() {
    return (
      <div>Chat History</div>
      <ul>
        {this.state.conversations.map((conversation) => {
          <UserListItemContainer key={conversation.id} user={conversation.otherUser} snippet={conversation.lastMessageReceived} linkto={conversation} />
        })}
      </ul>
    );
  }
}

export default Conversations;
