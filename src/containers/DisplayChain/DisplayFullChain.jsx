import React from 'react'; 
import { Field, FieldArray, reduxForm } from 'redux-form'
import LedgerBlock from './LedgerBlock'; 

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

// this can probably be developed in the LedgerBlock component....
const renderBlocks = ( ... ) => {
    <h3>Block Title</h3>
    <h4>Block Number</h4>
    <input>Block Data</input>
    <p>Block Hash</p>
    <p>Block Signature</p>
};


const DisplayFullChain = ( props ) => {
    return(
        <FieldArray name="dynamicChain" component={ renderBlocks } /> 
    )
};


const mapStateToProps = ( state ) => ( {
    block: state.block
} );

DisplayFullChain = reduxForm({
    form: fullChainForm
})( DisplayFullChain );

export default connect( mapStateToProps, {} )( DisplayFullChain ); 


// render forms for data and 
//  - dynamic calculation of hash that will lead to changes in class
//        - these changes in class will depend on the comparision of the current values ( in that block and the others derived from it )
//          with the value for the given blocks held in state in the Redux store
//  > can we do the same for the signature? 
// static values for:
//   - block title 
//   - block number