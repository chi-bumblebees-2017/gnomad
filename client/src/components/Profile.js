import React, { Component } from 'react';
import Interests from './Interests';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NewFirstMessage from './NewFirstMessage'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loaded: false,
      writeMessage: false,
    };
    this.displayMessageForm = this.displayMessageForm.bind(this);
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

  displayMessageForm() {
    this.setState({
      writeMessage: true,
    })
  }

  render() {
    if (this.state.loaded === true) {
      if (this.state.writeMessage) {
        return (
          <div className="profile-container ui centered container">
          <h1>{this.state.userData.user.first_name}</h1>

            <div className="profile-picture-container">
              <img src={this.state.userData.user.image_url} alt="profile-picture"/>
            </div>

            <NewFirstMessage receiverId={this.state.userData.user.id} />

            <h2>A Little Bit About Me...</h2>
            <div className="bio-container ui justified container">
              <p>{this.state.userData.user.bio}</p>
            </div>
            <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions}/>
          </div>
        );
      } else {
        return (
          <div className="profile-container ui centered container">
          <h1>{this.state.userData.user.first_name}</h1>

            <div className="profile-picture-container">
              <img src={this.state.userData.user.image_url} alt="profile-picture"/>
            </div>

          <div className="chat-button">
            <button className="ui blue button" onClick={this.displayMessageForm}>Start Chat</button>
          </div>

          <h2>A Little Bit About Me...</h2>
          <div className="bio-container ui justified container">
          <p>{this.state.userData.user.bio}</p>
          </div>
          <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions}/>
        </div>
        );
      }
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default Profile;
