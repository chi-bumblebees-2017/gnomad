import React, { Component } from 'react';

class Interests extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: "",
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // }

  // makeMessageRequest(value) {
  //   var data = new FormData();
  //   data.append("personal_message[body]", value);
  //   data.append("personal_message[receiver_id]", this.props.receiverId);
  //   data.append("personal_message[conversation_id]", this.props.conversationId);
  //   return data;
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(`/conversations/${this.props.conversationId}/personal_messages`, {
  //     method: "POST",
  //     body: this.makeMessageRequest(this.state.value),
  //     // mode: 'no-cors',
  //   })
  // }

// ATTEMP TO CREAK CHECKBOXES***************************
  // const interests = ['Restaurants','Sports'];
  // componentWillMount = () => {
  //   this.selectedCheckboxes = new Set();
  // }

  // toggleCheckbox = label => {
  //   if (this.selectedCheckbox.has(label)) {
  //     this.selectedCheckboxes.delete(label);
  //   } else {
  //     this/selectedCheckboxes.add(label);
  //   }
  // }

  // handleFormSubmit = formSubmitEvent => {
  //   formSubmitEvent.preventDefault();
  // }

  // createCheckbox = label => (
  //     <Checkbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} />
  //   )

  // createCheckboxes = () => (
  //     interests.map(this.createCheckbox)
  //   )

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12">

//             <form onSubmit={this.handleFormSubmit}>
//               {this.createCheckboxes()}
//               <button className="btn btn-default" type="submit">Save</button>
//             </form>

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// ********************************************************

  render() {
    return (
      <div>
        <p><label>Restaurants <input onChange={this.handleChange} type="radio" name="interests[restaurants]" /></label></p>
        <p><label>Sports <input onChange={this.handleChange} type="radio" name="interests[sports]" /></label></p>
        <p><label>Museums <input onChange={this.handleChange} type="radio" name="interests[museums]" /></label></p>
        <p><label>Bars <input onChange={this.handleChange} type="radio" name="interests[bars]" /></label></p>
        <p><label>Music <input onChange={this.handleChange} type="radio" name="interests[music]" /></label></p>
        <p><label>Outdoors <input onChange={this.handleChange} type="radio" name="interests[outdoors]" /></label></p>
        <p><label>Art <input onChange={this.handleChange} type="radio" name="interests[art]" /></label></p>
        <p><label>Fitness <input onChange={this.handleChange} type="radio" name="interests[fitness]" /></label></p>
        <p><label>Architecture <input onChange={this.handleChange} type="radio" name="interests[architecture]" /></label></p>
        <p><label>Family-Fun <input onChange={this.handleChange} type="radio" name="interests[family_fun]" /></label></p>
        <p><label>Zoo <input onChange={this.handleChange} type="radio" name="interests[zoo]" /></label></p>
        <p><label>Culture <input onChange={this.handleChange} type="radio" name="interests[culture]" /></label></p>
        <p><label>Volunteer <input onChange={this.handleChange} type="radio" name="interests[volunteer]" /></label></p>
        <p><label>Shopping <input onChange={this.handleChange} type="radio" name="interests[shopping]" /></label></p>
      </div>
    );
  }
}

export default Interests;
