import React, { Component } from 'react';
// const FB = window.FB;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import FacebookLogin from 'react-facebook-login';

class Login extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {

  // // Here we run a very simple test of the Graph API after login is
  // // successful.  See statusChangeCallback() for when this call is made.
  // testAPI () {
  //   console.log('Welcome!  Fetching your information.... ');
  //   FB.api('/me', function(response) {
  //   console.log('Successful login for: ' + response.name);
  //   document.getElementById('status').innerHTML =
  //     'Thanks for logging in, ' + response.name + '!';
  //   });
  // };

  // // This is called with the results from from FB.getLoginStatus().
  // statusChangeCallback(response) {
  //   console.log('statusChangeCallback');
  //   console.log(response);
  //   // The response object is returned with a status field that lets the
  //   // app know the current login status of the person.
  //   // Full docs on the response object can be found in the documentation
  //   // for FB.getLoginStatus().
  //   if (response.status === 'connected') {
  //     // Logged into your app and Facebook.
  //     this.testAPI();
  //   } else if (response.status === 'not_authorized') {
  //     // The person is logged into Facebook, but not your app.
  //     document.getElementById('status').innerHTML = 'Please log ' +
  //       'into this app.';
  //   } else {
  //     // The person is not logged into Facebook, so we're not sure if
  //     // they are logged into this app or not.
  //     document.getElementById('status').innerHTML = 'Please log ' +
  //     'into Facebook.';
  //   }
  // };

  // // This function is called when someone finishes with the Login
  // // Button.  See the onlogin handler attached to it in the sample
  // // code below.
  // checkLoginState() {
  //   FB.getLoginStatus(function(response) {
  //     this.statusChangeCallback(response);
  //   }.bind(this));
  // };

  handleClick() {

    // FB.login(this.checkLoginState());
  };


  render() {
    return(
      <div >
      <div className="fb-login-button" data-size="medium" data-button-type="login_with" data-show-faces="false" data-use-continue-as="false" data-onlogin="checkLoginState()" >
      </div>
      </div>
      )
  }


// const responseFacebook = (response) => {
//   console.log(response);
// }

// ReactDOM.render(
//   <FacebookLogin
//     appId="1088597931155576"
//     autoLoad={true}
//     fields="name,email,picture"
//     onClick={componentClicked}
//     callback={responseFacebook} />,
//   document.getElementById('demo')
// );

}

export default Login;
