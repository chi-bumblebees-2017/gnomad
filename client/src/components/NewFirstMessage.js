import React, { Component } from 'react';
import { Form, TextArea, Message } from 'semantic-ui-react';

class NewFirstMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      messageSent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  makeMessageRequest(value) {
    var data = new FormData();
    data.append("personal_message[body]", value);
    data.append("personal_message[receiver_id]", this.props.receiverId);
    return data;
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/conversations", {
      method: "POST",
      body: this.makeMessageRequest(this.state.value),
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
      // mode: 'no-cors',
    }).then(this.setState({
      messageSent: true,
    }))

  }

  render() {
    if (this.state.messageSent) {
      return( <Message success header="Message sent!" /> );
    } else {
      return (
        <Form success className="icon input" fixed="bottom" id="personal-message-form" onSubmit={this.handleSubmit}>
          <textarea action="Send" id="new-message" placeholder="Start chatting..." name="personal_message" value={this.state.value} onChange={this.handleChange} />
          <i onClick={this.handleSubmit} id="send-message-icon" className="send circular inverted blue link icon"></i>
        </Form>
      );
    }
  }
}

export default NewFirstMessage;
