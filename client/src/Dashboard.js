import React, { Component } from 'react';
import Interests from './components/Interests';
import RecentChats from './RecentChats';
import NewProfile from './NewProfile';
import { Button, Loader } from 'semantic-ui-react'
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
      userLoaded: false,
      chatsLoaded: false,
      editing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({editing: true});
  }

  componentDidMount() {
    fetch('/users/a', {
      method: 'GET',
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        this.setState({
          userData: dataJson,
          userLoaded: true,
        });
      });

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
          chatsLoaded: true,
          editing: false,
        });
      });
  }

  render() {
    if (this.state.userLoaded === true && this.state.chatsLoaded === true && this.state.editing === false) {
      return(
        <div className="profile-container ui centered container">
          <div className="max-width">
            <h1>{this.state.userData.user.first_name}</h1>

            <div className="profile-picture-container">
              <img src={this.state.userData.user.image_url} alt="profile-picture" className="border-radius-10"/>
            </div>
            <div>
              <Button compact content='Edit' icon='edit' labelPosition='left' basic color='red'size='small' onClick={this.toggleEdit}/>
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
  else if (this.state.userLoaded === true && this.state.chatsLoaded === true && this.state.editing === true) {
    return ( <NewProfile userData={this.userData} /> );
  }
  else {
    return ( <Loader /> );
  }
}
}
export default Dashboard;
