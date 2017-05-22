import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';

class Login extends Component {
  loggedIn() {
    return (localStorage.getItem('gnomad-auth-token') && localStorage.getItem('gnomad-auth-token').length >= 1)
  }
  render() {
    if (this.loggedIn()) {
      return (<Redirect push to={{ pathname: "/account" }} />)
    } else {
      return(
        <div>
        <div className="ui section divider"></div>

        <h1>GNOMAD</h1>
        <div className="ui section divider"></div>

        <div className="splash-picture">
          <img height="200" src="https://media.istockphoto.com/photos/garden-gnome-picture-id157403714"/>
        </div>

        <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-use-continue-as="false" data-onlogin="checkLoginState()" >
        </div>

        <div className="ui horizontal section divider">About</div>

        <div>Gnomad allows travellers (Gnomads) to connect to city residents (Localhosts) in order to have an authentic local experience of their travel destination. To get started, Log in with Facebook and tell us a little bit more about yourself. Happy Travelling!</div>

        <div className="ui section divider"></div>

        </div>
      )
    }
  }
}

export default Login;
