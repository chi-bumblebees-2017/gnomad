import React, { Component } from 'react';
import Interests from './Interests';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NewFirstMessage from './NewFirstMessage';
import Star from './Star';
import { Label, Dimmer, Loader } from 'semantic-ui-react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loaded: false,
      writeMessage: false,
      starred: false,
    };
    this.displayMessageForm = this.displayMessageForm.bind(this);
    this.toggleStar = this.toggleStar.bind(this);
  }

  toggleStar() {
    this.setState({ starred: !this.state.starred })
  }

  componentDidMount() {
    fetch(`/users/${this.props.match.params.id}`, {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        console.log(dataJson);
        this.setState({
          userData: dataJson,
          loaded: true,
          starred: dataJson.starred,
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
            <div className="max-width">

              <div className='max-width '>
                <h1 className='inline'>{this.state.userData.user.first_name}</h1>
                <Star action={this.toggleStar} starred={this.state.starred} userID={this.state.userData.user.id}/>
              </div>
              <div attached className="profile-picture-container">
                <img  src={this.state.userData.user.image_url} alt="profile-picture" className="border-radius-10"/>
              </div>

              <NewFirstMessage receiverId={this.state.userData.user.id} />
              <h2>A Little Bit About Me...</h2>
              <div className="bio-container ui centered container">
                <p>{this.state.userData.user.bio}</p>
              </div>
              <div className="ui section divider"></div>
              <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions}/>
            </div>
          </div>
        );
      } else {
        if (this.state.userData.conversation) {
          return (
            <div className="profile-container ui centered container">
              <div className="max-width">
              <h1 className='inline' >{this.state.userData.user.first_name} </h1><Star action={this.toggleStar} starred={this.state.starred} userID={this.state.userData.user.id}/>
                <div className="profile-picture-container">
                  <img src={this.state.userData.user.image_url} alt="profile-picture" className="border-radius-10"/>
                </div>

              <div className="chat-button">
                <Link to={`/chats/${this.state.userData.conversation.id}`}><button className="ui blue button">Continue chatting</button></Link>
              </div>

              <div className='ui centered container'>
                <h2 className='inline'>A Little Bit About Me...</h2>
                <Label size='mini' as='a' color='yellow' tag>Stars</Label>
              </div>
              <div className="bio-container ui centered container">
                <p>{this.state.userData.user.bio}</p>
              </div>
              <div className="ui section divider"></div>
                <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions}/>
              </div>
            </div>
          );
        } else {
          return (
            <div className="profile-container ui centered container">
              <div className="max-width">
              <h1 className='inline' >{this.state.userData.user.first_name} </h1><Star action={this.toggleStar} starred={this.state.starred} userID={this.state.userData.user.id}/>

                <div className="profile-picture-container">
                  <img src={this.state.userData.user.image_url} alt="profile-picture" className="border-radius-10"/>
                </div>

              <div className="chat-button">
                <button className="ui blue button" onClick={this.displayMessageForm}>Start Chat</button>
              </div>

              <div className='ui centered container'>
                <h2 className='inline'>A Little Bit About Me...</h2>
                <Label size='mini' as='a' color='yellow' tag>Stars</Label>
              </div>
              <div className="bio-container ui centered container">
                <p>{this.state.userData.user.bio}</p>
              </div>
              <div className="ui section divider"></div>
              <Interests travel_interests={this.state.userData.travel_interests} host_interests={this.state.userData.host_interests} suggestions={this.state.userData.suggestions}/>
            </div>
          </div>
        );
      }
    }
    } else {
      return (
        <Dimmer active inverted><Loader /></Dimmer>
      );
    }
  }
}

export default Profile;
