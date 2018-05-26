import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { encryptBlock } from '../../helpers/encryptBlock'; 

class LedgerBlockForm extends Component {
  render() {
    const { handleSubmit, blockHash } = this.props;

    return (
      <form className={ this.props.formClassName } onSubmit={ handleSubmit }>
        <div className={ "css-blockNumber" } >
          <label>Generator Block</label>
        </div>

        <div>
          <label>Block Title</label>
          <div className={ "css-blockInputDiv" } >
              <Field className={ "css-blockInput" } name="blockTitle" component="input" type="text"/>
          </div>
        </div>

        <div>
          <label>Data</label>
          <div className={ "css-blockInputDiv" } >
              <Field className={ "css-blockInput" } name="blockData" component={ "textarea" } type="text"/>
          </div>
        </div>
        <p>Block Hash: { blockHash }</p>
        <button type="submit">Mine</button>

      </form>
    );
  }
}

const afterSubmit = ( result, dispatch ) => 
    dispatch( reset( 'singleBlockForm' ));


LedgerBlockForm = reduxForm({
  form: 'singleBlockForm',
  onSubmitSuccess: afterSubmit
})( LedgerBlockForm );

const selector = formValueSelector('singleBlockForm')
LedgerBlockForm = connect(
  state => {
    const currentHash = state.block.currentBlock.blockHash; 
    const blockTitleValue = selector(state, 'blockTitle')
    const blockDataValue = selector(state, 'blockData')
    const hashTargetValue = `${ blockTitleValue || ''}${ blockDataValue || ''}`;
    return {
      currentHash,
      blockHash: encryptBlock.returnValue( hashTargetValue ) 
    }
  }
)( LedgerBlockForm )

export default LedgerBlockForm;