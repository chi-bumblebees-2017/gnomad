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
    fetch('/users/a', {
      method: "GET",
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

  componentDidMount() {
    if (this.loggedIn()) {
      this.onceLoggedIn();
    }
  }

  render() {
    if (this.loggedIn()) {
      if (this.state.loaded === true && this.state.userData.user.home_city){
        return (<Redirect push to={{ pathname: "/account" }} />)
      } else if (this.state.loaded === true && !(this.state.userData.user.home_city) ) {
        return (<Redirect push to={{ pathname: "/register" }} />)
      } else {
        console.log(this.state);
        return (<div> :( </div>)
      }
    } else {
      return(
        <div>
        <h1>GNOMAD</h1>
        <div className="splash-picture">
          <img height="200" src="http://media.istockphoto.com/photos/garden-gnome-picture-id157403714"/>
        </div>
        <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-use-continue-as="false" data-onlogin="checkLoginState()" >
        </div>
        </div>
      )
    }
  }
}

export default Login;
