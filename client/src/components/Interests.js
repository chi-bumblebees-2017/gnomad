import React, { Component } from 'react';
import GnomadInterests from './GnomadInterests'
import LocalHostInterests from './LocalHostInterests'

class Interests extends Component {
  profileDisplay() {
    if(this.props.travel_interests.length>0 && this.props.host_interests.length>0){
      return(
        <div className="interests-container ui center aligned container">
        <p>Host and travel</p>
          <GnomadInterests travel_interests={this.props.travel_interests} />
          <div className="ui section divider"></div>
          <LocalHostInterests host_interests={this.props.host_interests} suggestions={this.props.suggestions} />
        </div>
      );
    } else if (this.props.travel_interests.length>0){
      return(
        <div className="interests-container">
        <p>Just travel</p>
          <GnomadInterests travel_interests={this.props.travel_interests} />
        </div>
      );
    } else if (this.props.host_interests.length>0){
      return(
        <div className="interests-container">
        <p>Just host</p>
          <LocalHostInterests host_interests={this.props.host_interests} suggestions={this.props.suggestions} />
        </div>
      );
    } else {
      return(
        <div className="interests-container">EMPTY CONTAINER</div>
      );
    }
  }

  render() {
    return (
      this.profileDisplay()
    );
  }
}
export default Interests;
