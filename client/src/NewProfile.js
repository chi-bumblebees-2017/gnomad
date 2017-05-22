import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Checkbox from './Checkbox';
import Dropdown from 'react-dropdown';
import update from 'react-addons-update';

class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        city: "",
        state: "",
        user_bio: "",
        gnomad_profile: "",
        localhost_profile: "",
        gnomad_pref: {
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
        },
        local_pref: {
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
        },
      },
      loaded: false,
      userData: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createProfile = this.createProfile.bind(this);
    this.updateInterest = this.updateInterest.bind(this);
  }

// sends the data to create a profile
  updateInterest(profile, category, value) {
    const newValue = value;
    const profileType = profile;
    const interest = category;
    var newState = update(this.state, {
      values: {[profileType]: {[interest]: {$set: newValue}}
    }});
    this.setState(newState);
    console.log(this.state.values);
  }
// stores what is immedidatly typed
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    var newState = update(this.state, {
      values: {[name]: {$set: value}}
    })
    this.setState(newState);
  }

// ajax, makes the request
  handleSubmit(event) {
    console.log(this.state.values)
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

  componentDidMount() {
    fetch(`/users/0`, {
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
    return (<div>
      <p>Create Profile</p>
      <p>Facebook picture and name</p>
      <form onSubmit={this.handleSubmit} className="create-profile-form">

        <p><label>City: <input name="city" required type="text" onChange={this.handleChange} /></label></p>

        <label>State: </label>
        <select type="select" name="state" onChange={this.handleChange} required value={this.state.values.state}>
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
        <select type="select" name="gnomad_profile" onChange={this.handleChange} required value={this.state.values.gnomad_profile}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <p>As a Gnomad I like to :</p>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="restaurants"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="sports"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="museums"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="bars"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="music"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="outdoors"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="art"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="fitness"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="architecture"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="family_fun"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="zoo"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="culture"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="volunteer"/>
        <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="shopping"/>
        <label>I want to register as a Gnomad: </label>

         <label>I am availble to show people around as a Localhost: </label>
        <select type="select" name="localhost_profile" onChange={this.handleChange} required value={this.state.values.localhost_profile}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <p>As a Local Host:</p>

        <p><label>Local Suggestions: <textarea name="suggestions" onChange={this.handleChange} /></label></p>

        <p>I like to show people:</p>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="restaurants"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="sports"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="museums"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="bars"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="music"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="outdoors"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="art"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="fitness"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="architecture"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="family_fun"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="zoo"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="culture"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="volunteer"/>
        <Checkbox profileType="local_pref" handler={this.updateInterest} category="shopping"/>

        <input type="submit" value="Submit" />
      </form>
      </div>)
  };
}

export default NewProfile;
