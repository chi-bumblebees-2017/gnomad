import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PersonalMessageContainer from './PersonalMessageContainer';
import NewMessage from './NewMessage';


class Conversation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      loaded: false,
      newMsgText: "",
      subscription: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.checkAuthorClass = this.checkAuthorClass.bind(this);
    this.checkAuthorName = this.checkAuthorName.bind(this);
  }

  sendNewMessage(event) {
    event.preventDefault();
    this.state.subscription.perform('add', {
      "message": this.state.newMsgText,
      "conversation_id": parseInt(this.props.match.params.id, 10),
      "author_id": this.state.me.id})
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
      if (!this.state.subscription) {
        let that = this;
        this.state.subscription = this.props.cable.subscriptions.create({channel: 'ChatChannel', me_id: `${this.state.me.id}`, other_id: `${this.state.other.id}`}, {
            connected() { this.perform("subscribed") },
            disconnected() { this.perform("unsubscribed") },
            received(data) {
              console.log(data)
              that.setState({
                messages: [
                  ...that.state.messages,
                  data
                ],
                newMsgText: "",
              })
            }
          }
        );
      }
      return (
        <div>
          <div className="profile-link-banner"><Link to={`/users/${this.state.other.first_name}/${this.state.other.id}`}>Visit {this.state.other.first_name}'s profile</Link></div>
          <div className="conversation-container">
            {this.state.messages.map((personalMessage) =>
              <PersonalMessageContainer className={this.checkAuthorClass(personalMessage)} key={personalMessage.id} author={this.checkAuthorName(personalMessage)} messageBody={personalMessage.body} />
            )}
          </div>
          <NewMessage ref='newMessage' sendMessageHandler={this.sendNewMessage} changeHandler={this.handleChange} value={this.state.newMsgText} conversationId={this.props.match.params.id} receiverId={this.state.other.id} />
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
