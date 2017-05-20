import React, { Component } from 'react';

class PersonalMessage extends Component {
  render() {
    return (
      <div>
        <div>{this.props.id}</div>
        <div>{this.props.body}</div>
      </div>
    );
  }
}

export default PersonalMessage;
