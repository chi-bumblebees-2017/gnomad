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
      <form className="ui icon input top-margin-10" id="search-bar" onSubmit={this.props.submitHandler}>
        <input type="text" placeholder="Example: Chicago, IL"value={this.props.value} onChange={this.props.changeHandler} />
        <i aria-hidden="true" onClick={this.props.submitHandler} className="blue search circular inverted link icon"></i>
      </form>
    );
  }
}

export default SearchBar;
