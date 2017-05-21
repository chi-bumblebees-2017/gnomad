import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SearchResults extends Component {
  render() {
    if (this.props.results.length == 0) {
      return (
        <div className="search-results">
          No localhosts found in that city that share your interests...
        </div>
      );
    } else {
      return (
        <div className="search-results">
          {this.props.results.map((localhost) =>
            <div>{localhost.first_name}</div>
          )}
        </div>
      );
    }
  }
}

export default SearchResults;
