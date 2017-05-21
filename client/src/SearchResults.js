import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import UserListItemContainer from './UserListItemContainer'

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
        <ul className="search-results">
          {this.props.results.map((localhost) =>
            <UserListItemContainer key={localhost.id} user={localhost} snippet={localhost.suggestions} linkto={`/users/${localhost.first_name}/${localhost.id}`} />
          )}
        </ul>
      );
    }
  }
}

export default SearchResults;
