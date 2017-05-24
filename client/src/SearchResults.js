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
        <div className="search-results ui comments container">
          <p className="margin-none">No localhosts found that</p>
          <p className="margin-none">share your interests...</p>
        </div>
      );
    } else {
      return (
        <div className="ui centered container search-results ui comments top-margin-10">
        <ul className="max-width left-pad-0">
          {this.props.results.map((localhost) =>
            <UserListItemContainer key={localhost.id} user={localhost} snippet={localhost.bio} linkto={`/users/${localhost.first_name}/${localhost.id}`} />
          )}
        </ul>
        </div>
      );
    }
  }
}

export default SearchResults;
