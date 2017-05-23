import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
   constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loaded: false,
      facebook: false,
    };
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  loggedIn() {
    let loggedInState = (localStorage.getItem('gnomad-auth-token') && localStorage.getItem('gnomad-auth-token').length >= 1)
    return loggedInState
  }

  onceLoggedIn() {
    console.log(localStorage.getItem('gnomad-auth-token'))
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
          })
      });
  }

  responseFacebook(response) {
    var data = new FormData()
    let login = this
    data.append("first_name", response.first_name)
    data.append("last_name", response.last_name)
    data.append("uid", response.id)
    data.append("email", response.email)

    window.FB.api('me/picture?width=150&height=150',
      function(response){
            data.append("image_url", response.data.url)
            fetch("/users", {
              method: "POST",
              body: data,
              mode: 'no-cors',
            }).then(function(data){
              return data.json();
            }).then(function(data){
                localStorage.setItem('gnomad-auth-token', data.auth_token);
                login.setState({facebook: true});
            })
        });
  }
    responseFacebooks(response) {
  }

  // componentDidMount() {
  //   console.log("Component did mount");
  //   if (this.loggedIn()){
  //     this.onceLoggedIn();
  //   }

  // }

  render() {
    if (this.loggedIn()) {
      console.log("0")
      console.log(this.state)
      if (!(this.state.loaded)){
        this.onceLoggedIn()
      }
      if (this.state.loaded === true && this.state.userData.user.home_city){
          console.log("1")
          console.log(this.state)
        return (<Redirect push to={{
          pathname: "/account",
        }} />)
      } else if (this.state.loaded === true && !(this.state.userData.user.home_city) ) {
          console.log("2")
          console.log(this.state)
        return (<Redirect push to={{
          pathname: "/register",
        }} />)
      } else {
        console.log("3")
        console.log(this.state)
        return (<div>Internet gnomes are fetching your info...</div>)
      }
    } else {
      return(
        <div>
        <div className="ui section divider"></div>


        <h1>GNOMAD</h1>
        <div className="ui section divider"></div>

        <div className="splash-picture">
          <img height="200" src="https://media.istockphoto.com/photos/garden-gnome-picture-id157403714"/>
        </div>

        <FacebookLogin
          appId="1351086744971505"
          autoLoad={false}
          fields="first_name,last_name,email,id"
          callback={this.responseFacebook}
        />

        <div className="ui horizontal section divider">About</div>

        <div>Gnomad allows travellers (Gnomads) to connect to city residents (Localhosts) in order to have an authentic local experience of their travel destination. To get started, Log in with Facebook and tell us a little bit more about yourself. Happy Travelling!</div>

        <div className="ui section divider"></div>

        </div>
      )
    }
  }
}

export default Login;
