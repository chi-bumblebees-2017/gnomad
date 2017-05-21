import React, { Component } from 'react';

class Interests extends Component {

  render() {
    return (
      <div className="interests-container">
        <div className="gnomad-interests-container">
          <h3>as a Gnomad, I am interested in...</h3>
          <ul>
            {this.props.travel_interests.map((interest) =>
              <li key={this.props.travel_interests.indexOf(interest)}>{interest.replace(/_/g," ")}</li>
              )}
          </ul>
        </div>

        <div className="localhost-interests-container">
          <h3>as a Localhost, I am interested in...</h3>
          <ul>
            {this.props.host_interests.map((interest) =>
              <li key={this.props.host_interests.indexOf(interest)}>{interest.replace(/_/g," ")}</li>
              )}
          </ul>
        </div>
      </div>
    );
  }
}
export default Interests;
