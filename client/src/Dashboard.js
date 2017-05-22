import React, { Component } from 'react';
import Interests from './components/Interests';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch('/users/a', {
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
    if (this.state.loaded === true) {
      return(
        <div className="profile-container ui centered container">
          <div className="max-width">
            <h1>{this.state.userData.user.first_name}</h1>

            <div className="profile-picture-container">
              <img src={this.state.userData.user.image_url} alt="profile-picture" className="border-radius-10"/>
          </div>
          <h2>A Little Bit About Me...</h2>
          <div className="bio-container ui centered container">
            <p>{this.state.userData.user.bio}</p>
          </div>
          <div className="ui section divider"></div>
          <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions} />
         </div>
      </div>
    );
  }
  else {
    return ( <div>Internet gnomes are fetching your info...</div> );
  }
}
}
export default Dashboard;
