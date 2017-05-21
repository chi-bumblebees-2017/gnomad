import React, { Component } from 'react';
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
    }).then(data => data.json())
      .then(dataJson => {
        this.setState({
          userData: dataJson,
          loaded: true,
    })});
  }

  render() {
    if (this.state.loaded === true) {
      // console.log(this.state)
      return (
      <div className="profile-container">
        <h1>{this.state.userData.first_name} </h1>

        <div className="profile-picture-container">
          <img src={this.state.userData.image_url} alt="profile-picture"/>
        </div>

        <div className="bio-container">
          <h2>A Little Bit About Me...</h2>
          <p>{this.state.userData.bio}</p>
        </div>

        <div className="gnomad-interests-container">
          <h3>Gnomad Interests</h3>
          <p>Placeholder: User Gnomad Interests</p>
        </div>

        <div className="localhost-interests-container">
          <h3>Localhost Interests</h3>
          <p>Placeholder: User Localhost Interests</p>
        </div>
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
