import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class BlockForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label>Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
BlockForm = reduxForm({
  form: 'singleBlock' // a unique name for this form
})( BlockForm );

export default BlockForm;



//  called with from parent           < BlockForm onSubmit={ ( values ) => receiveBlock( values ) } /> 
