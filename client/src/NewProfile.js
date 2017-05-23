import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Checkbox from './Checkbox';
// import Dropdown from 'react-dropdown';
import update from 'react-addons-update';
import { Form, TextArea } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

class NewProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      loaded: false,
      userData: [],
      values: {
        city: "",
        state: "",
        user_bio: "",
        gnomad_profile: "",
        localhost_profile: "",
        gnomad_pref: {
          restaurants: false,
          sports: false,
          museums: false,
          bars: false,
          music: false,
          outdoors: false,
          art: false,
          fitness: false,
          architecture: false,
          family_fun: false,
          zoo: false,
          culture: false,
          volunteer: false,
          shopping: false,
        },
        suggestions: "",
        local_pref: {
          restaurants: false,
          sports: false,
          museums: false,
          bars: false,
          music: false,
          outdoors: false,
          art: false,
          fitness: false,
          architecture: false,
          family_fun: false,
          zoo: false,
          culture: false,
          volunteer: false,
          shopping: false,
        },
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createProfile = this.createProfile.bind(this);
    this.updateInterest = this.updateInterest.bind(this);
  }

  createProfile(values) {
    var data = new FormData();
    data.append("profile_data[city]", values.city);
    data.append("profile_data[state]", values.state);
    data.append("profile_data[user_bio]", values.user_bio);
    data.append("profile_data[suggestions]", values.suggestions);
    data.append("profile_data[gnomad_profile]", values.gnomad_profile);
    data.append("profile_data[localhost_profile]", values.localhost_profile);
    data.append("profile_data[gnomad_pref][restaurants]", values.gnomad_pref.restaurants);
    data.append("profile_data[gnomad_pref][sports]", values.gnomad_pref.sports);
    data.append("profile_data[gnomad_pref][museums]", values.gnomad_pref.museums);
    data.append("profile_data[gnomad_pref][bars]", values.gnomad_pref.bars);
    data.append("profile_data[gnomad_pref][music]", values.gnomad_pref.music);
    data.append("profile_data[gnomad_pref][outdoors]", values.gnomad_pref.outdoors);
    data.append("profile_data[gnomad_pref][art]", values.gnomad_pref.art);
    data.append("profile_data[gnomad_pref][fitness]", values.gnomad_pref.fitness);
    data.append("profile_data[gnomad_pref][architecture]", values.gnomad_pref.architecture);
    data.append("profile_data[gnomad_pref][family_fun]", values.gnomad_pref.family_fun);
    data.append("profile_data[gnomad_pref][zoo]", values.gnomad_pref.zoo);
    data.append("profile_data[gnomad_pref][culture]", values.gnomad_pref.culture);
    data.append("profile_data[gnomad_pref][volunteer]", values.gnomad_pref.volunteer);
    data.append("profile_data[gnomad_pref][shopping]", values.gnomad_pref.shopping);
    data.append("profile_data[localhost_pref][restaurants]", values.local_pref.restaurants);
    data.append("profile_data[localhost_pref][sports]", values.local_pref.sports);
    data.append("profile_data[localhost_pref][museums]", values.local_pref.museums);
    data.append("profile_data[localhost_pref][bars]", values.local_pref.bars);
    data.append("profile_data[localhost_pref][music]", values.local_pref.music);
    data.append("profile_data[localhost_pref][outdoors]", values.local_pref.outdoors);
    data.append("profile_data[localhost_pref][art]", values.local_pref.art);
    data.append("profile_data[localhost_pref][fitness]", values.local_pref.fitness);
    data.append("profile_data[localhost_pref][architecture]", values.local_pref.architecture);
    data.append("profile_data[localhost_pref][family_fun]", values.local_pref.family_fun);
    data.append("profile_data[localhost_pref][zoo]", values.local_pref.zoo);
    data.append("profile_data[localhost_pref][culture]", values.local_pref.culture);
    data.append("profile_data[localhost_pref][volunteer]", values.local_pref.volunteer);
    data.append("profile_data[localhost_pref][shopping]", values.local_pref.shopping);
    return data
  }

// Updates user in controller, sets form submitted value to true to trigger re-render
  handleSubmit(event) {
    event.preventDefault();
    fetch(`/users/${this.state.userData.user.id}`, {
      method: "PUT",
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
      body: this.createProfile(this.state.values)
    }).then(() => {
      var newState = update(this.state, {
       submitted: {$set: true}
     });
     this.setState(newState);
    })
  }

// Updates interest states with checkbox values
  updateInterest(profile, category, value) {
    const newValue = value;
    const profileType = profile;
    const interest = category;
    var newState = update(this.state, {
      values: {[profileType]: {[interest]: {$set: newValue}}
    },
    userData: {$set: this.state.userData},
    loaded: {$set: this.state.loaded},
  });
    this.setState(newState);
  }

// Updates form state for all non-checkbox values
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    var newState = update(this.state, {
      values: {[name]: {$set: value}},
      userData: {$set: this.state.userData},
      loaded: {$set: this.state.loaded},
    })
    this.setState(newState);
  }


  // Retrieves current user information from controller/local storage and sets loaded to 'true'
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
    // Redirects to user dashboard if form successfully submits
    if (this.state.submitted) {
      return ( <Redirect to={{
        pathname: '/account',
      }} /> );
    }
    // Renders main form content IF current user data has loaded
    else if (this.state.loaded) {
      return (<div className="register-max-width">
        <h3 className="top-pad-10">Create Profile</h3>
          <div className="profile-picture-container">
              <img src={this.state.userData.user.image_url} alt="profile-picture" className="border-radius-10"/>
          </div>
          <h3 className="top-margin-10">{this.state.userData.user.first_name} {this.state.userData.user.last_name}</h3>

        <form onSubmit={this.handleSubmit} className="create-profile-form ui form">

          <div className="ui labeled input padding-right">
            <div className="ui basic label">City</div>
            <input name="city" required type="text" onChange={this.handleChange} />
          </div>

          <br />
          <br />
          <div className="ui labeled input">
          <div className="ui basic label">State: </div>
          <select className="ui dropdown" type="select" name="state" onChange={this.handleChange} required value={this.state.values.state}>
            <option>--</option>
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
        </div>

          <h5><label>Write a bio: <TextArea autoHeight className="bio-max-width" name="user_bio" onChange={this.handleChange}/></label></h5>

          <div className="ui section divider"></div>


          <div><label><h5 className="inline">I want to register as a Gnomad: </h5></label>
            <div className="ui input">
              <select type="select" name="gnomad_profile" onChange={this.handleChange} required value={this.state.values.gnomad_profile}>
                <option >--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <h5>As a Gnomad I like to:</h5>
            <div className="ui equal width grid">
              <div className="row">
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="restaurants"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="sports"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="museums"/>
              </div>
              <div className="row">
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="bars"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="music"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="outdoors"/>
              </div>
              <div className="row">
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="art"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="fitness"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="architecture"/>
              </div>
              <div className="row">
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="family_fun"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="zoo"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="culture"/>
              </div>
              <div className="row">
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="volunteer"/>
                <Checkbox profileType="gnomad_pref" object={this.state.values.gnomad_pref} handler={this.updateInterest} category="shopping"/>
                <div className="column"></div>
              </div>
            </div>
          <div className="ui section divider"></div>


          <div><label><h5 className="inline">I want to register as a Localhost: </h5></label>
            <div className="ui input">
              <select type="select" name="localhost_profile" onChange={this.handleChange} required value={this.state.values.localhost_profile}>
                <option >--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <h5>As a Local Host I like to show people:</h5>
          <div className="ui equal width grid">
              <div className="row">
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="restaurants"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="sports"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="museums"/>
              </div>
              <div className="row">
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="bars"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="music"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="outdoors"/>
              </div>
              <div className="row">
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="art"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="fitness"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="architecture"/>
              </div>
              <div className="row">
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="family_fun"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="zoo"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="culture"/>
              </div>
              <div className="row">
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="volunteer"/>
                <Checkbox profileType="local_pref" handler={this.updateInterest} category="shopping"/>
                <div className="column"></div>
              </div>
            </div>

          <h5><label>Local Suggestions: <TextArea autoHeight className="bio-max-width" value={this.state.suggestions} name="suggestions" onChange={this.handleChange} /></label></h5>

          <input className="ui blue button" type="submit" value="Submit" />
        </form>
        <div className="ui section divider"></div>

        </div>)
  } else {
    return (
      <div className="top-margin-10">Internet gnomes are fetching your info...</div>
    )
  }
  };
}

export default NewProfile;
