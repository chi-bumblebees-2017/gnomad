import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';

class Star extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({selected: !this.state.selected})
  }

  render() {
    return(
        <Button attached='top' icon='empty star' circular color='yellow' compact floated='right' size='big' toggle active={this.state.selected} onClick={this.handleClick} />
    );
  }
}

export default Star
