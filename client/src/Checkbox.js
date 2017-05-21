import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.category = this.props.category
    this.state = {
      checkedValue: false,
    };
    this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
  };

  toggleCheckboxValue(event) {
    this.setState({
      checkedValue: !this.state.checkedValue
    });
    this.props.handler(event.target.name, this.state.checkedValue);
  };

  render() {
    return(
      <div>
      <p>
        <label>{this.props.category}</label>
        <input onChange={this.toggleCheckboxValue} type="checkbox" value={this.state.checkedValue} name={this.props.category} />
      </p>
      </div>
    )
  }
}
export default Checkbox
