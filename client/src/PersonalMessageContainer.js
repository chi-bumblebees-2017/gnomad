import React, { Component } from 'react';

class PersonalMessageContainer extends Component {
  render() {
    return (
      <div>
        <div>{this.props.messageId}</div>
        <div>{this.props.messageBody}</div>
      </div>
    );
  }
}

export default PersonalMessageContainer;
