import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  // TODO: remove this method and the app-intro dummy text below. just added here by Simon to test server connections.
//   componentDidMount() {
//   //   fetch('/users', {
//   //     accept: 'application/json',
//   //   }).then(data => data.json())
//   //     .then(dataJson => { this.setState({
//   //       users: dataJson,
//     // })});

//     window.fbAsyncInit = function() {
//       FB.init({
//         appId      : '1351086744971505',
//         cookie     : true,
//         xfbml      : true,
//         version    : 'v2.8'
//       });
//       // FB.AppEvents.logPageView();
//       FB.getLoginStatus(function(response) {
//       this.statusChangeCallback(response);
//       console.log(response);
//     }.bind(this));
//     }.bind(this);

//     (function(d, s, id){
//        var js, fjs = d.getElementsByTagName(s)[0];
//        if (d.getElementById(id)) {return;}
//        js = d.createElement(s); js.id = id;
//        js.src = "//connect.facebook.net/en_US/sdk.js";
//        fjs.parentNode.insertBefore(js, fjs);
//      }(document, 'script', 'facebook-jssdk'));
//   }

//   function statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//     // The response object is returned with a status field that lets the
//     // app know the current login status of the person.
//     // Full docs on the response object can be found in the documentation
//     // for FB.getLoginStatus().
//     if (response.status === 'connected') {
//       // Logged into your app and Facebook.
//       // Here is where we do something with the auth hash
//       getFacebookInfo();

//     } else {
//       // The person is not logged into your app or we are unable to tell.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into this app.';
//     }
//   }

//     function getFacebookInfo() {
//     console.log("Our facebook info function has been hit");
//     FB.api('/me', {fields: 'first_name, last_name, id, email'}, function(response) {
//       console.log("Current user: " + response.name)
//       console.log(response)
//       FB.api('me/picture?width=150&height=150', function(response){
//         console.log("++++++++++++++");
//         console.log(response);
//         console.log("++++++++++++++");
//       })
//     })
//   }
// }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          Here is a json of user information:
          {this.state.users.map((user) =>
            <p key={user.id}>{user.name}</p>
          )}
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
