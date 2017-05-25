import React, { Component } from 'react';
import {
  Link,
  Redirect,
} from 'react-router-dom';
import PersonalMessageContainer from './PersonalMessageContainer';
import NewMessage from './NewMessage';
import { Button, Comment, Form, Header, Message, Menu, Loader } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import AfterLastMessage from './AfterLastMessage'

class Conversation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      loaded: false,
      newMsgText: "",
      subscription: null,
      blocked: false,
      authorization: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.checkAuthorClass = this.checkAuthorClass.bind(this);
    this.checkAuthorName = this.checkAuthorName.bind(this);
    this.checkColor = this.checkColor.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  sendNewMessage(event) {
    event.preventDefault();
    this.state.subscription.perform('add', {
      "message": this.state.newMsgText,
      "conversation_id": parseInt(this.props.match.params.id, 10),
      "author_id": this.state.me.id})
  }

  componentDidMount() {
    let authorization;
    fetch(`/conversations/${this.props.match.params.id}`, {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        console.log(dataJson);
        authorization = dataJson.authorization;
        if (authorization) {
          this.setState({
            messages: dataJson.personal_messages,
            loaded: true,
            me: dataJson.me,
            other: dataJson.other,
            blocked: dataJson.blocked,
            authorization: authorization,
          });
        }
      }).then(dataJson => {
          if (authorization && (!this.state.subscription)) {
            let that = this;
            this.state.subscription = this.props.cable.subscriptions.create({channel: 'ChatChannel', me_id: `${this.state.me.id}`, other_id: `${this.state.other.id}`}, {
                connected() { },
                disconnected() { this.perform("unsubscribed") },
                received(data) {
                  that.setState({
                    messages: [
                      ...that.state.messages,
                      data
                    ],
                    newMsgText: "",
                  })
                }});
          }});
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

  checkColor(message) {
    if (message.author_id === this.state.me.id) {
      return "blue"
    } else {
      return "green"
    }
  }
  checkAuthorName(message) {
    if (message.author_id === this.state.me.id) {
      return this.state.me.first_name
    } else {
      return this.state.other.first_name
    }
  }

  scrollToBottom() {
    this.messageLast.scrollIntoView({behavior: "smooth"});
  }

  render() {
    // if (!this.props.loggedIn) {
    //   return (<Redirect to="/" />);
    // }
    if (this.state.loaded === true) {
      if ((this.state.blocked === true) || (!this.state.authorization)) {
        return (<Redirect push to={{ pathname: "/account"}} />);
      }
      return (
        <div className="bio-max-width">
          <div className="clear-fixed">
            <Menu fixed="top" widths="one" color="blue" id="profile-link-banner"><Link to={`/users/${this.state.other.first_name}/${this.state.other.id}`}>Visit {this.state.other.first_name}'s profile</Link></Menu>
          </div>
            <Comment.Group>
              <div className="conversation-container">
                {this.state.messages.map((personalMessage) =>
                  <PersonalMessageContainer className={this.checkAuthorClass(personalMessage)} color={this.checkColor(personalMessage)} key={personalMessage.id} author={this.checkAuthorName(personalMessage)} messageBody={personalMessage.body} />
                )}
              </div>
              <AfterLastMessage divRef={el => this.messageLast = el} mountedCallback={this.scrollToBottom} />
              <NewMessage ref='newMessage' sendMessageHandler={this.sendNewMessage} changeHandler={this.handleChange} value={this.state.newMsgText} conversationId={this.props.match.params.id} receiverId={this.state.other.id} />
              </Comment.Group>
          </div>
      );
    } else {
      return (
        <div>
          <div className="conversation-container">
            <Loader />
          </div>
        </div>
      );
    }
  }
}

export default Conversation;
