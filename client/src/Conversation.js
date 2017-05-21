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
    }).then(data => data.json())
      .then(dataJson => {
        console.log(dataJson)
        this.setState({
          messages: dataJson.personal_messages,
          loaded: true,
    })});
  }


// receiver user stub (4 times)**********
  render() {
    if (this.state.loaded === true) {
      return (
        <div>
          <div className="profile-link-banner"><Link to="/users/1">Visit user 1 profile</Link></div>
          <div className="conversation-container">
            {this.state.messages.map((personalMessage) =>
              <PersonalMessageContainer key={personalMessage.id} messageBody={personalMessage.body} />
            )}
          </div>
          <NewMessage conversationId={this.props.match.params.id} receiverId={1} />
        </div>
        );
    } else {
      return (
        <div>
          <div className="profile-link-banner"><Link to="/users/1">Visit user 1 profile</Link></div>
          <div className="conversation-container">
            loading...
          </div>
          <NewMessage conversationId={this.props.match.params.id} receiverId={1} />
        </div>
      );
    }
  }
}

export default Conversation;
