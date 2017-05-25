import React, { Component } from 'react';
import {Form, Confirm, Message} from 'semantic-ui-react';

class BlockForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      comment: '',
      open: false,
      confirmed: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.blockData = this.blockData.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  blockData(values) {
    let data = new FormData();
    data.append("block[reason]", values.reason);
    data.append("block[comment]", values.comment);
    data.append("block[offender_id]", this.props.user.id);
    return data;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ open: true})
  }

  handleCancel() {
    this.setState({ open: false})
  }

  handleConfirm() {
    let blockData = this.blockData(this.state);
    this.props.handleBlock(blockData);
    this.setState({ open: false, confirmed: true});
    this.props.redirect();
  }
  render() {
    if (this.state.confirmed) {
      return( <Message success header='Success!' content="You have blocked this user and can no longer be viewed or contacted by them. You will be redirected to your dashboard now." /> );
    } else {
      return(
        <div>
        <Form onSubmit={this.handleSubmit} success={this.state.confirmed} >
        <Form.Field>
          <label>Reason?</label>
           <select className="ui dropdown" type="select" name="reason" onChange={this.handleChange} required value={this.state.reason}>
             <option>---</option>
             <option value="harassment">Harassment</option>
             <option value="inappropriate">Inappropriate chats or content</option>
             <option value="threats">Bullying/Threats</option>
             <option value="other">Other</option>
           </select>
        </Form.Field>
          <Form.TextArea label="Optional: tell us any other information you'd like to report" placeholder="Share your feedback here..." name='comment' onChange={this.handleChange} />
          <Form.Button>Submit</Form.Button>

        </Form>
        <Confirm
            open={this.state.open}
            cancelButton='Undo block'
            confirmButton="Confirm block"
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            header="Block this user? Confirm or cancel" />
        </div>
      );
    }
  };
}

export default BlockForm;
