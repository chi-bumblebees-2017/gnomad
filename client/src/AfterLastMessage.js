import React, { Component } from 'react';

class AfterLastMessage extends Component {
  componentDidMount() { this.props.mountedCallback(); }
  componentDidUpdate() { this.props.mountedCallback(); }

  render() {
    return(<div id="new-message-replace" ref={this.props.divRef} ></div>)
  }
}

export default AfterLastMessage;
