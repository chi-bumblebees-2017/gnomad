import React, { Component } from 'react';

class ProfileInterestsForm extends Component {

  render() {
    return(
    <div>
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
</div>
    )
  }
}

export default ProfileInterestsForm
