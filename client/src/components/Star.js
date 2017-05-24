import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.color = this.color.bind(this);
    this.userData = this.userData.bind(this);
    this.changeCount = this.changeCount.bind(this);
    this.state = {
      count: props.count,
    }
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

  changeCount(count, action) {
    if (action === 'add') {
      return (count + 1);
    } else if (action === 'delete') {
      return (count - 1);
    } else { return count }
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
      // var count = this.state.count;
      // var action = 'add';
      // this.setState({count: this.changeCount(count, action)})
    } else if (!this.props.starred) {
      fetch(`/stars`, {
        method: 'DELETE',
        accept: 'application/json',
        headers: {
        'Authorization': localStorage.getItem('gnomad-auth-token'),
        },
        body: this.userData(this.props.userID),
      });
      // var count = this.state.count;
      // var action = 'delete';
      // this.setState({count: this.changeCount(count, action)});
    } else {
      alert("Error: could not complete action, please try again later");
    }

  }

  render() {
    return(
        <Button compact content='Stars' size='mini' icon='star' color={this.color()} onClick={this.props.action}
          label={{basic: true, color: this.color(), content: this.state.count, pointing: 'left', size: 'mini'}} />
    );
  }
}

export default Star
