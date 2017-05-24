import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    fetch("/sessions", {
      method: 'DELETE',
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    });
    localStorage.setItem('gnomad-auth-token', "");
    this.props.disconnectCable();
    this.props.logoutHandler();
  }
  render() {
    return( <Redirect to="/" /> )
  }
}

export default Logout;
