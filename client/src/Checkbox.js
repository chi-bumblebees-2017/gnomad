import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
    this.state = {
      checkedValue: true,
    };
    this.category = this.props.category
    this.profile = this.props.profileType
  };

  toggleCheckboxValue(event) {
    console.log("1")
    console.log(this.state)
    this.setState({
      checkedValue: !this.state.checkedValue
    });
    console.log("2")
    console.log(this.state)
    this.props.handler(this.profile, event.target.name, this.state.checkedValue);
  };

  render() {
    return(
      <div>
      <p>
        <label>{this.props.category}</label>
        <input onClick={this.toggleCheckboxValue} type="checkbox" value={this.props.category} name={this.props.category} />
      </p>
      </div>
    )
  }
}
export default Checkbox
