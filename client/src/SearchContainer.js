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
      users: [],
    }
  }
  // TODO: remove this method and the app-intro dummy text below. just added here by Simon to test server connections.
  componentDidMount() {
    fetch('/users', {
      accept: 'application/json',
    }).then(data => data.json())
      .then(dataJson => { this.setState({
        users: dataJson,
    })});
  }

  render() {
    return (
      <div className="search-container">

      </div>
    );
  }
}

export default SearchContainer;
