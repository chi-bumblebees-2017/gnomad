import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';

class Login extends Component {
  loggedIn() {
    return (localStorage.getItem('gnomad-auth-token').length >= 1)
  }
  render() {
    if (this.loggedIn()) {
      return (<Redirect push to={{ pathname: "/account" }} />)
    } else {
      return(
        <div>
        <div className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-use-continue-as="false" data-onlogin="checkLoginState()" >
        </div>
        </div>
      )
    }
  }
}

export default Login;
