import React, { Component } from 'react';
import Checkbox from './Checkbox'

class SearchFilters extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurants: false,
      sports: false,
      museums: false,
      bars: false,
      music: false,
      outdoors: false,
      art: false,
      fitness: false,
      history: false,
      architecture: false,
      family_fun: false,
      zoo: false,
      culture: false,
      volunteer: false,
      shopping: false,
    }

    this.setVariables = this.setVariables.bind(this);
    this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
  }
  setVariables() {
  var INTERESTS = ["restaurants", "sports", "museums", "bars", "music", "outdoors", "art", "fitness", "history", "architecture", "family_fun", "zoo", "culture", "volunteer", "shopping"];

  var INTEREST_BOXES = INTERESTS.map((interest) =>
          <div className="left aligned column">
            <div className="ui checkbox">
              <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name={interest} />
              <label>{interest.split("_").join(" ")}</label>
            </div>
          </div>
              );
    return INTEREST_BOXES
  }

  toggleCheckboxValue(event) {
    let interest = event.target.name
    console.log(interest)
    console.log(this.state[interest])
    this.setState({ [interest]: !this.state[interest] });

  }

  componentDidUpdate() {
    console.log("This is what bothers me")
    // console.log(this.state)
    this.props.handleCheck(this.state)
  }
  render() {
    return (
      <div>
        <div className="ui equal width grid">
          <div className="row">
            {this.setVariables()[0]}
            {this.setVariables()[1]}
            {this.setVariables()[2]}
          </div>
          <div className="row">
            {this.setVariables()[3]}
            {this.setVariables()[4]}
            {this.setVariables()[5]}
          </div>
          <div className="row">
            {this.setVariables()[6]}
            {this.setVariables()[7]}
            {this.setVariables()[8]}
          </div>
          <div className="row">
            {this.setVariables()[9]}
            {this.setVariables()[10]}
            {this.setVariables()[11]}
          </div>
          <div className="row">
            {this.setVariables()[12]}
            {this.setVariables()[13]}
            <div className="column"></div>
          </div>
        </div>
        <div className="ui section divider"></div>
      </div>
    );
  }
}

export default SearchFilters;
