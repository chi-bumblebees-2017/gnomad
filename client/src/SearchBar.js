import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location,
    }
  }

  render() {
    return (
      <form id="search-bar" onSubmit={this.props.submitHandler}>
        <input type="text" value={this.state.value} onChange={this.changeHandler} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
