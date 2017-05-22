import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PersonalMessageContainer from './PersonalMessageContainer';
import NewMessage from './NewMessage';
import {ActionCable} from 'react-actioncable-provider';


class Conversation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      loaded: false,
    }
  }

  onReceived(message) {
    this.setState({
      messages: [
        ...this.state.messages,
        message
      ],
    })
  }

  sendMessage = () => {
    const message = this.refs.newMessage.value
    // Call perform or send
    this.refs.chat.perform('sendMessage', {message})
  }

  componentDidMount() {
    fetch(`/conversations/${this.props.match.params.id}`, {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        console.log(dataJson)
        this.setState({
          messages: dataJson.personal_messages,
          loaded: true,
          me: dataJson.me,
          other: dataJson.other,
    })});
  }

  checkAuthorClass(message) {
    if (message.author_id === this.state.me.id) {
      return "my-message"
    } else {
      return "their-message"
    }
  }
  checkAuthorName(message) {
    if (message.author_id === this.state.me.id) {
      return this.state.me.first_name
    } else {
      return this.state.other.first_name
    }
  }

  render() {
    if (this.state.loaded === true) {
      return (
        <div>
          <ActionCable ref='chat' channel={ {channel: 'chat', user: '1'} } onReceived={this.onReceived} />
          <div className="profile-link-banner"><Link to={`/users/${this.state.other.first_name}/${this.state.other.id}`}>Visit {this.state.other.first_name}'s profile</Link></div>
          <div className="conversation-container">
            {this.state.messages.map((personalMessage) =>
              <PersonalMessageContainer className={this.checkAuthorClass(personalMessage)} key={personalMessage.id} author={this.checkAuthorName(personalMessage)} messageBody={personalMessage.body} />
            )}
          </div>
          <NewMessage ref='newMessage' sendMessageHandler={this.sendMessage} conversationId={this.props.match.params.id} receiverId={this.state.other.id} />
        </div>
        );
    } else {
      return (
        <div>
          <div className="conversation-container">
            loading...
          </div>
        </div>
      );
    }
  }
}

export default Conversation;
