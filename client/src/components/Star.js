import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.color = this.color.bind(this);
    this.userData = this.userData.bind(this);
  }

  color() {
    if (this.props.starred) {
      return "yellow";
    } else { return "grey"; }
  }

  userData(id) {
    var data = new FormData();
    data.append("star[recipient_id]", id);
    return data;
  }

  componentDidUpdate() {
    if (this.props.starred) {
      fetch(`/stars`, {
        method: 'POST',
        accept: 'application/json',
        headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token'),
        },
        body: this.userData(this.props.userID),
      })
    } else if (!this.props.starred) {
      fetch(`/stars`, {
        method: 'DELETE',
        accept: 'application/json',
        headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token'),
        },
        body: this.userData(this.props.userID),
      })
    } else {
      alert("Error: could not complete action, please try again later");
    }
  }

  render() {
    return(
        <Button icon='empty star' circular color={this.color()} compact size='big' onClick={this.props.action} />
    );
  }
}

export default Star
