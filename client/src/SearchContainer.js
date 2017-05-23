import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchFilters from './SearchFilters';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      localhosts: [],
      likesAll: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCheckedValueLikesAll = this.setCheckedValueLikesAll.bind(this);
    this.setInterestState = this.setInterestState.bind(this);
    this.checkHandled = this.checkHandled.bind(this);
  }

  setInterestState(updatedInterests) {
    this.setState({
      interests: updatedInterests
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // TODO: Change history so that back button works. How do I persist the results from the last search too?
    this.props.history.push(`/search/${this.state.location}`, this.state);
    fetch(`/users?location=${this.state.location}`, {
      accept: 'application/json',
      headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token')
      },
    }).then(data => data.json())
      .then(dataJson => {
        this.setState({
          localhosts: dataJson,
      })});
  }

  setCheckedValueLikesAll(){
    this.setState({ likesAll: !this.state.likesAll });
  }

  handleChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  checkHandled(value) {
    console.log(value)
    console.log("Save me Obi Juan who ever the fuck you are")
  }

  render() {
    return (
      <div className="search-container top-margin-10">
        <SearchBar submitHandler={this.handleSubmit} changeHandler={this.handleChange} value={this.state.location} />
        <br />
        <div><h5 className="inline"> Localhosts must match all interests:</h5>
        <div className="ui fitted toggle checkbox left-pad-10 inline"><input onClick={this.setCheckedValueLikesAll} type="checkbox" /><label></label></div></div>
        <SearchFilters handleCheck={this.checkHandled} />
        <SearchResults results={this.state.localhosts} />
      </div>
    );
  }
}

export default SearchContainer;
