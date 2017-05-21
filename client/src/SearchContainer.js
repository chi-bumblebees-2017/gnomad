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
