import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.color = this.color.bind(this);
    this.userData = this.userData.bind(this);
    this.state = {
      count: props.count,
    }
    this.changeCount = this.changeCount.bind(this);
    this.toggleStar = this.props.action;
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

  changeCount(){
   let newStatus = this.toggleStar();
     if (newStatus === true) {
      this.setState({count: (this.state.count + 1)})
    }
    else if (newStatus === false) {
      this.setState({count: (this.state.count - 1)})
    } else { alert("SOMETHING IS FUCKY HERE")}
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
      });
    } else if (!this.props.starred) {
      fetch(`/stars`, {
        method: 'DELETE',
        accept: 'application/json',
        headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token'),
        },
        body: this.userData(this.props.userID),
      });
    } else {
      alert("Error: could not complete action, please try again later");
    }
  }

  render() {
    return(
        <Button compact content='Stars' size='mini' icon='star' color={this.color()} onClick={this.changeCount}
          label={{basic: true, color: this.color(), content: this.state.count, pointing: 'left', size: 'mini'}} />
    );
  }
}

export default Star
