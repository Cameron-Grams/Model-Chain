import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { encryptBlock } from '../../helpers/encryptBlock'; 

class BlockForm extends Component {
  render() {
    const { handleSubmit, blockHash } = this.props;

    let blockColorCode;

    if( this.props.currentHash ){
        if( this.props.currentHash === blockHash ){
          blockColorCode = "css-goodBlock";
        } else if ( this.props.currentHash !== blockHash ){
          blockColorCode = "css-badBlock";
        }
    } else {
     blockColorCode = ''; 
    }

    return (
      <form className={ this.props.formClassName } onSubmit={ handleSubmit }>
        <div className={ `css-blockNumber ${ blockColorCode }` } >
          <label>Block Number: Example </label>
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
        <p>Block Hash: </p>
        <p>{ blockHash }</p>
        <button type="submit">Mine</button>

      </form>
    );
  }
}

BlockForm = reduxForm({
  form: 'singleBlockForm'
})( BlockForm );

const selector = formValueSelector('singleBlockForm')

BlockForm = connect(
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
)( BlockForm )

export default BlockForm;