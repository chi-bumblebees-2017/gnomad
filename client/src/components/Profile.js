import React, { Component } from 'react';
import Interests from './Interests';
import ChatButton from './ChatButton';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      loaded: false,
    }
  }

  componentDidMount() {
    fetch(`/users/${this.props.match.params.id}`, {
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
  // TODO: update so that "start chat" button starts a chat with the user
  render() {
    if (this.state.loaded === true) {
      return (
      <div className="profile-container ui centered container">
        <h1>{this.state.userData.user.first_name}</h1>

        <div className="profile-picture-container">
          <img src={this.state.userData.user.image_url} alt="profile-picture"/>
        </div>

        <div className="chat-button">
          <ChatButton />
        </div>

        <h2>A Little Bit About Me...</h2>
        <div className="bio-container ui justified container">
          <p>{this.state.userData.user.bio}</p>
        </div>

        <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions}/>
      </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default Profile;
