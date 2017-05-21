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
    }
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
    // TODO: write this method
    if (message.author_id === this.state.me.id) {
      return "my-message"
    } else {
      return "their-message"
    }
  }
  checkAuthorName(message) {
    // TODO: write this method
    if (message.author_id === this.state.me.id) {
      return this.state.me.first_name
    } else {
      return this.state.other.first_name
    }
  }

// receiver user stub (4 times)**********
  render() {
    if (this.state.loaded === true) {
      return (
        <div>
          <div className="profile-link-banner"><Link to={`/users/${this.state.other.first_name}/${this.state.other.id}`}>Visit {this.state.other.first_name}'s profile</Link></div>
          <div className="conversation-container">
            {this.state.messages.map((personalMessage) =>
              <PersonalMessageContainer className={this.checkAuthorClass(personalMessage)} key={personalMessage.id} author={this.checkAuthorName(personalMessage)} messageBody={personalMessage.body} />
            )}
          </div>
          <NewMessage conversationId={this.props.match.params.id} receiverId={this.state.other.id} />
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
