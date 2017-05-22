import React, { Component } from 'react';

class GnomadInterests extends Component {

  render() {
    return (
      <div className="gnomad-interests-container">
        <h3>as a Gnomad, I am interested in...</h3>
        <ul>
          {this.props.travel_interests.map((interest) =>
            <li key={this.props.travel_interests.indexOf(interest)}>{interest.replace(/_/g," ")}</li>
            )}
        </ul>
      </div>
    );
  }
}
export default GnomadInterests;
