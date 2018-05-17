import React from 'react'; 
import { Field, FieldArray, reduxForm } from 'redux-form'
import LedgerBlock from './LedgerBlock'; 

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

