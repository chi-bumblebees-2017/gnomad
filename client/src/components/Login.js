import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div >
      <div className="fb-login-button" data-max-rows="1" data-size="medium" data-button-type="login_with" data-show-faces="false" data-use-continue-as="false" data-onlogin="checkLoginState()" >
      </div>
      </div>
    )
  }
}

export default Login;
