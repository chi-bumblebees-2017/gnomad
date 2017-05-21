import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        {this.props.results.map((localhost) =>
          <UserListItemContainer />
        )}
      </div>
    );
  }
}

export default SearchResults;
