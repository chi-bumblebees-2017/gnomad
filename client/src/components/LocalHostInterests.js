import React, { Component } from 'react';

class LocalHostInterests extends Component {

  render() {
    return (
      <div className="localhost-interests-container">
        <h3>as a Localhost, I am interested in...</h3>
        <ul>
          {this.props.host_interests.map((interest) =>
            <li key={this.props.host_interests.indexOf(interest)}>{interest.replace(/_/g," ")}</li>
            )}
        </ul>
      </div>
    );
  }
}
export default LocalHostInterests;
