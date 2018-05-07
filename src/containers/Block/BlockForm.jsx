import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class BlockForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Block Number: Example </label>
        </div>

        <div>
          <label>Block Title</label>
          <div className={ "css-blockInput" } >
              <Field name="blockTitle" component="input" type="text"/>
          </div>
        </div>

        <div>
          <label>Data</label>
          <div className={ "css-blockInput" } >
              <Field name="blockData" component="input" type="textarea"/>
          </div>
        </div>

        <button type="submit">Mine</button>
      </form>
    );
  }
}

// Decorate the form component
BlockForm = reduxForm({
  form: 'singleBlock' // a unique name for this form
})( BlockForm );

export default BlockForm;


