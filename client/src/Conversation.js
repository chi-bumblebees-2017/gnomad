import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PersonalMessage from './PersonalMessage'

class Conversation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      loaded: false,
    }
  }
  // TODO: figure out fetch route
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

  render() {
    if (this.state.loaded === true) {
      return (
        <div className="conversation-container">
          {this.state.messages.map((personalMessage) =>
            <PersonalMessage key={personalMessage.id} messageId={personalMessage.id} body={personalMessage.body} />
          )}
        </div>
        );
    } else {
      return (
        <div className="conversation-container">
          loading...
        </div>
      );
    }
  }
}

export default Conversation;
