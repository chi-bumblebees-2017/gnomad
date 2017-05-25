import React, { Component } from 'react';
import Checkbox from './Checkbox'

class SearchFilters extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurants: this.props.likes.restaurants || this.props.userLikes.restaurants || false,
      sports: this.props.likes.sports || this.props.userLikes.sports || false,
      museums: this.props.likes.museums || this.props.userLikes.museums || false,
      bars: this.props.likes.bars || this.props.userLikes.bars || false,
      music: this.props.likes.music || this.props.userLikes.music || false,
      outdoors: this.props.likes.outdoors || this.props.userLikes.outdoors || false,
      art: this.props.likes.art || this.props.userLikes.art || false,
      fitness: this.props.likes.fitness || this.props.userLikes.fitness || false,
      history: this.props.likes.history || this.props.userLikes.history || false,
      architecture: this.props.likes.architecture || this.props.userLikes.architecture || false,
      family_fun: this.props.likes.family_fun || this.props.userLikes.family_fun || false,
      zoo: this.props.likes.zoo || this.props.userLikes.zoo || false,
      culture: this.props.likes.culture || this.props.userLikes.culture || false,
      volunteer: this.props.likes.volunteer || this.props.userLikes.volunteer || false,
      shopping: this.props.likes.shopping || this.props.userLikes.shopping || false,
    }

    this.setVariables = this.setVariables.bind(this);
    this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
  }
  setVariables() {
  var INTERESTS = ["restaurants", "sports", "museums", "bars", "music", "outdoors", "art", "fitness", "architecture", "family_fun", "zoo", "culture", "volunteer", "shopping", "history"];

  var INTEREST_BOXES = INTERESTS.map((interest) =>
          <div className="left aligned column">
            <div className="ui checkbox">
              <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name={interest} checked={this.state[interest]} />
              <label>{interest.split("_").join(" ")}</label>
            </div>
          </div>
              );
    return INTEREST_BOXES
  }

  toggleCheckboxValue(event) {
    let interest = event.target.name

    this.setState((prevState) => { return {[interest]: !prevState[interest] } }, this.setStateCallback);
    // this.props.handleCheck(this.state)

  }

  setStateCallback() {
    this.props.handleCheck(this.state);
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div>
      <div className="ui section divider"></div>
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
            {this.setVariables()[14]}
          </div>
        </div>
      </div>
      <div className="ui section divider"></div>
      </div>
    );
  }
}

export default SearchFilters;
