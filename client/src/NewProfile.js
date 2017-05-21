import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Interests from './Interests';
import Dropdown from 'react-dropdown';

class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: [],
    }
  }

// sends the data to create a profile
  createProfile(value) {

  }

// ??? handles what comes back from request
  handleChange() {

  }

// ajax, makes the request
  handleSubmit(event) {
    event.preventDefault();
    fetch('/users/:id', {
      method: "PUT",
      body: this.createProfile(this.state.values)
    })
  }

  render() {
    const stateOptions = ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY']
    const stateDefaultOption = stateOptions['Select']

    const ynOptions = ['Yes', 'No']
    const ynDefaultOption = ynOptions['Select']


    return (<div>
      <p>Create Profile</p>
      <p>Facebook picture and name</p>
      <form onSumbit={this.createProfile} className="create-profile-form">

        <p><label>Email: <input name="email" required type="email" /></label></p>
        <p><label>City: <input name="city" required type="text" /></label></p>
        <p><label>State:</label>
        <Dropdown options={stateOptions} onChange={this._onSelect} name="state" required value={stateDefaultOption} /></p>

        <p><label>Bio: <textarea name="user_bio" /></label></p>

        <p><label>I want to register as a Gnome:</label>
        <Dropdown options={ynOptions} onChange={this._onSelect} name="gnome_profile" value={ynDefaultOption} /></p>

        <p><label>I want to register as a Local Host:</label>
        <Dropdown options={ynOptions} onChange={this._onSelect} name="localhost_profile"value={ynDefaultOption} /></p>

        <p>As a Gnomad I like to :</p>
        <Interests />

        <p>As a Local Host:</p>
        <p><label>I am available to host gnomes: </label>
        <Dropdown options={ynOptions} onChange={this._onSelect} name="available" value={ynDefaultOption} /></p>
        <p><label>Local Suggestions: <textarea name="suggestions" /></label></p>
        <p>I like to show people:</p>
        <Interests />

        <input type="submit" value="Submit" />
      </form>
      </div>)
  };
}

export default NewProfile;
