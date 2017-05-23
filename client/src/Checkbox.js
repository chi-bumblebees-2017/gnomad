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
    this.setState({
      checkedValue: !this.state.checkedValue
    });
    this.props.handler(this.profile, event.target.name, this.state.checkedValue);
  };

  render() {
    return(
      <div className="left aligned column">
        <div className="ui checkbox">
          <p>
            <input onClick={this.toggleCheckboxValue} type="checkbox" value={this.props.category} name={this.props.category} />
            <label>{this.props.category.replace(/_/g," ")}</label>
          </p>
        </div>
      </div>
    )
  }
}
export default Checkbox
