import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: "",
      localhosts: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/users?location=${this.state.location}`, {
      accept: 'application/json',
    }).then(data => data.json())
      .then(dataJson => {
        console.log(dataJson)
        this.setState({
          localhosts: dataJson,
      })});
  }


  handleChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  render() {
    return (
      <div className="search-container">
        <SearchBar submitHandler={this.handleSubmit} changeHandler={this.handleChange} value={this.state.location} />
        <SearchResults results={this.state.localhosts} />
      </div>
    );
  }
}

export default SearchContainer;
