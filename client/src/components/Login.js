import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div className="login-page-container">
      <h1>GNOMAD</h1>
        <div className="image-container">
          <img height="500" src="http://media.istockphoto.com/photos/garden-gnome-picture-id157403714"/>
        </div>

        <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-use-continue-as="false" data-onlogin="checkLoginState()">
        </div>
      </div>
    )
  }
}

export default Login;
