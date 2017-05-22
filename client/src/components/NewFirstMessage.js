import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';

class NewFirstMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
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
    })
  }

  render() {
    return (
      <form className="ui form" id="personal-message-form" onSubmit={this.handleSubmit}>
        <TextArea autoHeight id="new-message" name="personal_message" value={this.state.value} onChange={this.handleChange} />
        <input className="tiny ui blue button" type="submit" value="Send" />
      </form>
    );
  }
}

export default NewFirstMessage;
