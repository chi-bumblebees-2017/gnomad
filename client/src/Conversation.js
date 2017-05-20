import React, { Component } from 'react';

class Conversation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  // TODO: figure out fetch route
  componentDidMount() {
    fetch('/conversations/', {
      accept: 'application/json',
    }).then(data => data.json())
      .then(dataJson => { this.setState({
        users: dataJson,
    })});
  }

  render() {
    return (

    );
  }
}

export default Conversation;
