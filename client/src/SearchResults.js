import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import UserListItemContainer from './UserListItemContainer'

class SearchResults extends Component {
  render() {
    if (this.props.results.length === 0) {
      return (
        <div className="search-results ui comments">
          <p className="margin-none">No localhosts found in that city</p>
          <p className="margin-none">that share your interests...</p>
        </div>
      );
    } else {
      return (
        <ul className="search-results ui comments top-margin-10">
          {this.props.results.map((localhost) =>
            <UserListItemContainer key={localhost.id} user={localhost} snippet={localhost.bio} linkto={`/users/${localhost.first_name}/${localhost.id}`} />
          )}
        </ul>
      );
    }
  }
}

export default SearchResults;
