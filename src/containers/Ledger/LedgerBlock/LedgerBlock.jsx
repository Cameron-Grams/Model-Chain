import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import Carriage from '../../../components/Carriage/Carriage'; 

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{ label }</label>
    <div>
      <input { ...input } type={ type } placeholder={ label } />
      { touched && error && <span>{ error }</span> }
    </div>
  </div>
)

const renderData = ( { fields, meta: { error } }) => (
    <div>
    {fields.map(( data, index ) => (
      <div key={ index }>
        <Field
          name={ data }
          type="text"
          component={ renderField }
          label={`Block: #${index + 1}`}
        />
      </div>
    ))}
    {error && <li className="error">{error}</li>}
    </div>
)

const LedgerBlock = ( { fields, meta: { error, submitFailed } } ) => (
    <div>
    { fields.map( ( block, index ) => (    
        <Carriage >
            <h2>Block Title: { block.blockTitle }</h2>
            <h4>Block Data: { block.blockData }</h4>
            <p>Block Hash: { block.blockHash }</p>
            <p>Block Signature: { block.blockSignature }</p>
            <p>Key: { block.blockIdentifier }</p>
            
        <FieldArray name={`${ block }.blockData`} component={ renderData } />
        </Carriage>
    ) ) }
    </div> )


export default reduxForm( {
  form: 'blockArrays', 
})( LedgerBlock ); 



// render forms for data and 
//  - dynamic calculation of hash that will lead to changes in class
//        - these changes in class will depend on the comparision of the current values ( in that block and the others derived from it )
//          with the value for the given blocks held in state in the Redux store
//  > can we do the same for the signature? 
// static values for:
//   - block title 
//   - block number
