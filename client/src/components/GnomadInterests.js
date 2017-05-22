import React, { Component } from 'react';

class GnomadInterests extends Component {

  render() {
    return (
      <div className="gnomad-interests-container">
        <h3>as a Gnomad, I am interested in...</h3>
        <div role="list" className="ui horizontal list">
          {this.props.travel_interests.map((interest) =>
            <div role="listitem" className="item" key={this.props.travel_interests.indexOf(interest)}><i aria-hidden="true" className="tag icon"></i>{interest.replace(/_/g," ")}</div>
            )}
        </div>
      </div>
    );
  }
}
export default GnomadInterests;
