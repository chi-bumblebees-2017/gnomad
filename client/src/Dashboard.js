import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Interests from './Interests'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conversations: [],
    }
  }

  render() {
    return (<div>
      <p>Create Profile</p>
      <form className="create-profile-form">
        <p><label>Email: <input type="text" name="email" /></label></p>
        <p><label>City: <input type="text" name="city" /></label></p>
        <p><label>State: <input type="text" name="state" /></label></p>
        <p><label>Bio: <textarea /></label></p>

        <p>As a Gnomad I like to :</p>
        <Interests />

        <p>As a Local Host:</p>
        <p><label>I am available to host gnomes: <input type="radio" name="zoo" /></label></p>
        <p><label>Local Suggestions: <textarea /></label></p>
        <Interests />

        <input type="submit" value="Submit" />
      </form>
      </div>)
  };
}

export default Dashboard;
