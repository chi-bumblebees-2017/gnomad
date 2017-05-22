import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';

class Login extends Component {
   constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loaded: false,
    };

  }

  loggedIn() {
    return (localStorage.getItem('gnomad-auth-token') && localStorage.getItem('gnomad-auth-token').length >= 1)
  }

  onceLoggedIn() {
    fetch(`/users/0`, {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        this.setState({
          userData: dataJson,
          loaded: true,
    })});
  }

  render() {
    if (this.loggedIn()) {
      this.onceLoggedIn();
      if (this.state.loaded === true && this.state.userData.user.city){
        return (<Redirect push to={{ pathname: "/account" }} />)
      } else if (this.state.loaded === true && !(this.state.userData.user.city) ) {
        return (<Redirect push to={{ pathname: "/register" }} />)
      }
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
