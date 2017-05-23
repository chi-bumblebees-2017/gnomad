import React, { Component } from 'react';

class LocalHostInterests extends Component {

  render() {
    return (
      <div className="localhost-interests-container">
        <h3>as a Localhost, I am interested in...</h3>
        <div role="list" className="ui horizontal list">
          {this.props.host_interests.map((interest) =>
            <div role="listitem" className="item" key={this.props.host_interests.indexOf(interest)}><i aria-hidden="true" className="tag icon"></i>{interest.replace(/_/g," ")}</div>
            )}
        </div>
        <div className="ui section divider"></div>
        <div>
          <h3>my suggestions for visiting Gnomads...</h3>
          <div>{this.props.suggestions}</div>
        </div>
        <div className="ui section divider"></div>
      </div>
    );
  }
}
export default LocalHostInterests;
