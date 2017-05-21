import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localhosts: [],
    }
  }
  // TODO: remove this method and the app-intro dummy text below. just added here by Simon to test server connections.
  componentDidMount() {
    fetch('/users', {
      accept: 'application/json',
    }).then(data => data.json())
      .then(dataJson => { this.setState({
        localhosts: dataJson.localhosts,
    })});
  }

  render() {
    return (
      <div className="search-container">
        <SearchBar />
      </div>
    );
  }
}

export default SearchContainer;
