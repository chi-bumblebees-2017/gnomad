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
      newMsgText: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.onReceived = this.onReceived.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.checkAuthorClass = this.checkAuthorClass.bind(this);
    this.checkAuthorName = this.checkAuthorName.bind(this);
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
    this.refs.chat.perform('sendMessage', JSON.stringify({
      "message": this.state.newMsgText,
      "conversationId": this.props.match.params.id,
      "author_id": this.state.me.id}))
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

  handleChange(event) {
    this.setState({
      newMsgText: event.target.value,
    });
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
          <ActionCable ref='chat' channel={ {channel: 'chat', user: `${this.state.other.id}`} } onReceived={this.onReceived} />
          <div className="profile-link-banner"><Link to={`/users/${this.state.other.first_name}/${this.state.other.id}`}>Visit {this.state.other.first_name}'s profile</Link></div>
          <div className="conversation-container">
            {this.state.messages.map((personalMessage) =>
              <PersonalMessageContainer className={this.checkAuthorClass(personalMessage)} key={personalMessage.id} author={this.checkAuthorName(personalMessage)} messageBody={personalMessage.body} />
            )}
          </div>
          <NewMessage ref='newMessage' sendMessageHandler={this.sendMessage} changeHandler={this.handleChange} value={this.state.newMsgText} conversationId={this.props.match.params.id} receiverId={this.state.other.id} />
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
