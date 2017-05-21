import React, { Component } from 'react';

class PersonalMessageContainer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div>{this.props.author}</div>
        <div>{this.props.messageBody}</div>
      </div>
    );
  }
}

export default PersonalMessageContainer;
