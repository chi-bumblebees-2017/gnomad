import React, { Component } from 'react';

class Interests extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p><label>Restaurants
        <input onClick={this.toggleCheckboxValue} type="checkbox" value={testValue} name="restaurants" /></label></p>
        <p><label>Sports
        <input onClick={this.toggleCheckboxValue} type="checkbox" value={testValue} name="sports" /></label></p>
        <p><label>Museums
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="museums" /></label></p>
        <p><label>Bars
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="bars" /></label></p>
        <p><label>Music
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="music" /></label></p>
        <p><label>Outdoors
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="outdoors" /></label></p>
        <p><label>Art
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="art" /></label></p>
        <p><label>Fitness
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="fitness" /></label></p>
        <p><label>Architecture
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="architecture" /></label></p>
        <p><label>Family-Fun
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="family_fun" /></label></p>
        <p><label>Zoo
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="zoo" /></label></p>
        <p><label>Culture
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="culture" /></label></p>
        <p><label>Volunteer
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="volunteer" /></label></p>
        <p><label>Shopping
        <input onClick={this.toggleCheckboxValue} type="checkbox" value="false" name="shopping" /></label></p>
      </div>
    );
  }
}

export default Interests;
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

// ATTEMP TO CREAT CHECKBOXES***************************
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

