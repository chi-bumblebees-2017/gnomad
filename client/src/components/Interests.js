import React, { Component } from 'react';
import GnomadInterests from './GnomadInterests'
import LocalHostInterests from './LocalHostInterests'

class Interests extends Component {
  profileDisplay() {
    if(this.props.travel_interests.length>0 && this.props.host_interests.length>0){
      return(
        <div className="interests-container ui center aligned container">
          <GnomadInterests travel_interests={this.props.travel_interests} />
          <LocalHostInterests host_interests={this.props.host_interests} />
        </div>
      );
    } else if (this.props.travel_interests.length>0){
      return(
        <div className="interests-container">
          <GnomadInterests travel_interests={this.props.travel_interests} />
        </div>
      );
    } else if (this.props.host_interests.length>0){
      return(
        <div className="interests-container">
          <LocalHostInterests host_interests={this.props.host_interests} />
        </div>
      );
    } else {
      return(
        <div className="interests-container"></div>
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
