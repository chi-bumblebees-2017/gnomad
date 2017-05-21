import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import Interests from './Interests';
import Checkbox from './Checkbox';
import Dropdown from 'react-dropdown';
import update from 'react-addons-update';

class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {city: "",
        state: "",
        user_bio: "",
        gnomad_profile: "",
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
    this.updateInterest = this.updateInterest.bind(this);
  }

// sends the data to create a profile
  updateInterest(category, value) {
    const newValue = value;
    var newState = update(this.state, {
      values: {[category]: {$set: newValue}}
    })
    this.setState(newState);
    console.log("NEW VALUE HERE");
    console.log(newValue);
    console.log("OTHER BIZ HERE");
    console.log(this.state.values);
  }
// stores what is immedidatly typed
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    var newState = update(this.state, {
      values: {[name]: {$set: value}}
    })
    this.setState(newState)
    console.log(this.state.values)
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
    const ynOptions = ['Yes', 'No']
    const ynDefaultOption = ynOptions['Select']

    return (<div>
      <p>Create Profile</p>
      <p>Facebook picture and name</p>
      <form onSubmit={this.createProfile} className="create-profile-form">

        <p><label>City: <input name="city" required type="text" onChange={this.handleChange} /></label></p>

        <label>State: </label>
        <select name="state" onChange={this.handleChange} required value={this.state.values.state}>
          <option value="AK">AK</option>
          <option value="AL">AL</option>
          <option value="AR">AR</option>
          <option value="AZ">AZ</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="IA">IA</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="MA">MA</option>
          <option value="MD">MD</option>
          <option value="ME">ME</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="NE">NE</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NV">NV</option>
          <option value="NY">NY</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VA">VA</option>
          <option value="VT">VT</option>
          <option value="WA">WA</option>
          <option value="WI">WI</option>
          <option value="WV">WV</option>
          <option value="WY">WY</option>
        </select>

        <p><label>Bio: <textarea name="user_bio" onChange={this.handleChange}/></label></p>

        <label>I want to register as a Gnomad: </label>
        <select name="gnomad_profile" onChange={this.handleChange} required value={this.state.values.state}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        // <div><label>I want to register as a Local Host:</label>
        // <Dropdown options={ynOptions} onChange={this.handleChange} name="localhost_profile"value={ynDefaultOption} /></div>

        <p>As a Gnomad I like to :</p>
        <Checkbox handler={this.updateInterest} category="restaurants"/>
        <Checkbox handler={this.updateInterest} category="sports"/>
        <Checkbox handler={this.updateInterest} category="museums"/>
        <Checkbox handler={this.updateInterest} category="bars"/>
        <Checkbox handler={this.updateInterest} category="music"/>
        <Checkbox handler={this.updateInterest} category="outdoors"/>
        <Checkbox handler={this.updateInterest} category="art"/>
        <Checkbox handler={this.updateInterest} category="fitness"/>
        <Checkbox handler={this.updateInterest} category="architecture"/>
        <Checkbox handler={this.updateInterest} category="family_fun"/>
        <Checkbox handler={this.updateInterest} category="zoo"/>
        <Checkbox handler={this.updateInterest} category="culture"/>
        <Checkbox handler={this.updateInterest} category="volunteer"/>
        <Checkbox handler={this.updateInterest} category="shopping"/>

        <p>As a Local Host:</p>
        // <div><label>I am available to host gnomes: </label>
        // <Dropdown options={ynOptions} onChange={this.updateInterest} name="available" value={ynDefaultOption} /></div>

        <p><label>Local Suggestions: <textarea name="suggestions" onChange={this.handleChange} /></label></p>

        <p>I like to show people:</p>
        <Checkbox handler={this.updateInterest} category="restaurants"/>
        <Checkbox handler={this.updateInterest} category="sports"/>
        <Checkbox handler={this.updateInterest} category="museums"/>
        <Checkbox handler={this.updateInterest} category="bars"/>
        <Checkbox handler={this.updateInterest} category="music"/>
        <Checkbox handler={this.updateInterest} category="outdoors"/>
        <Checkbox handler={this.updateInterest} category="art"/>
        <Checkbox handler={this.updateInterest} category="fitness"/>
        <Checkbox handler={this.updateInterest} category="architecture"/>
        <Checkbox handler={this.updateInterest} category="family_fun"/>
        <Checkbox handler={this.updateInterest} category="zoo"/>
        <Checkbox handler={this.updateInterest} category="culture"/>
        <Checkbox handler={this.updateInterest} category="volunteer"/>
        <Checkbox handler={this.updateInterest} category="shopping"/>

        <input type="submit" value="Submit" />
      </form>
      </div>)
  };
}

export default NewProfile;
