import React, { Component } from 'react';
import { Comment, Message } from 'semantic-ui-react'

class PersonalMessageContainer extends Component {
  render() {
    return (
      <Comment className={this.props.className}>
        <Comment.Content >
          <Comment.Author>{this.props.author}</Comment.Author>
          <Message color={this.props.color} className="small-padding"><Comment.Text>{this.props.messageBody}</Comment.Text></Message>
        </Comment.Content>
      </Comment>
    );
  }
}

export default PersonalMessageContainer;
