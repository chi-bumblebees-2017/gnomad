import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class Star extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render() {
    return(
      <div>
        <Button icon='star' positive compact/>
      </div>
    );
  }
}

export default Star
