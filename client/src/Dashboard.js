import React, { Component } from 'react';
import Interests from './components/Interests';
import RecentChats from './RecentChats';
import NewProfile from './NewProfile';
import { Button } from 'semantic-ui-react'
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
      conversations: [],
      loaded: false,
      editing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(event) {
    this.setState({editing: !this.state.editing});
  }

  componentDidMount() {
    fetch('/edit', {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        this.setState({
          userData: dataJson,
    })});

    fetch('/conversations', {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token'),
        'Limit': '3',
      },
    })
    .then(data => data.json())
      .then(dataJson => {
        this.setState({
          conversations: dataJson,
          loaded: true,
        });
      });
  }

  render() {
    if (this.state.loaded === true && this.state.editing === false) {
      return(
        <div className="profile-container ui centered container">
          <div className="max-width">
            <h1>{this.state.userData.user.first_name}</h1>

            <div className="profile-picture-container">
              <img src={this.state.userData.user.image_url} alt="profile-picture" className="border-radius-10"/>
          </div>
          <div>
            <Button content='Edit' icon='edit' labelPosition='left' basic color='red'size='small' onClick={this.toggleEdit}/>
          </div>

          <h2>A Little Bit About Me...</h2>
          <div className="bio-container ui centered container">
            <p>{this.state.userData.user.bio}</p>
          </div>
          <div className="ui section divider"></div>
          <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions} />
         </div>
         <RecentChats conversations={this.state.conversations}/>
        </div>
    );
  }
  else if (this.state.loaded === true && this.state.editing === true) {
    console.log(this.state.userData.user)
    return ( <NewProfile editingUser={this.state.userData.user}/> );
  }
  else {
    return ( <div>Internet gnomes are fetching your info...</div> );
  }
}
}
export default Dashboard;
