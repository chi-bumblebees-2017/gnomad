import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Interests from './Interests';
import Dropdown from 'react-dropdown';
import update from 'react-addons-update';

class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {city: "",
        state: "",
        user_bio: "",
        gnome_profile: "",
        localhost_profile: "",
        restaurants: "",
        sports: "",
        museums: "",
        bars: "",
        music: "",
        outdoors: "",
        art: "",
        fitness: "",
        architecture: "",
        family_fun: "",
        zoo: "",
        culture: "",
        volunteer: "",
        shopping: "",
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createProfile = this.createProfile.bind(this);
  }

// sends the data to create a profile

// stores what is immedidatly typed
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    var newState = update(this.state, {
      values: {[name]: {$set: value}}
    })
    this.setState(newState)
  }

// ajax, makes the request
  handleSubmit(event) {
    event.preventDefault();
    fetch('/users/:id', {
      method: "PUT",
      body: this.createProfile(this.state.values)
    })
  }

  createProfile(values) {
    var data = new FormData();
    data.append("profileData", values)
    return data
  }

  render() {
    const stateOptions = ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY']
    const stateDefaultOption = stateOptions['Select']

    const ynOptions = ['Yes', 'No']
    const ynDefaultOption = ynOptions['Select']


    return (<div>
      <p>Create Profile</p>
      <p>Facebook picture and name</p>
      <form onSubmit={this.createProfile} className="create-profile-form">

        <p><label>City: <input name="city" required type="text" onChange={this.handleChange} /></label></p>

        <div><label>State:</label>
        <Dropdown options={stateOptions} name="state" required value={stateDefaultOption} onChange={this.handleChange}/></div>

        <p><label>Bio: <textarea name="user_bio" onChange={this.handleChange}/></label></p>

        <div><label>I want to register as a Gnome:</label>
        <Dropdown options={ynOptions} onChange={this.handleChange} name="gnome_profile" value={ynDefaultOption} /></div>

        <div><label>I want to register as a Local Host:</label>
        <Dropdown options={ynOptions} onChange={this.handleChange} name="localhost_profile"value={ynDefaultOption} /></div>

        <p>As a Gnomad I like to :</p>
        <Interests />

        <p>As a Local Host:</p>
        <div><label>I am available to host gnomes: </label>
        <Dropdown options={ynOptions} onChange={this.handleChange} name="available" value={ynDefaultOption} /></div>
        <p><label>Local Suggestions: <textarea name="suggestions" onChange={this.handleChange} /></label></p>
        <p>I like to show people:</p>
        <Interests />

        <input type="submit" value="Submit" />
      </form>
      </div>)
  };
}

export default NewProfile;
