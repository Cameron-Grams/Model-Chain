import React from 'react'; 
import { connect } from 'react-redux'; 
// import { reduxForm } from 'redux-form'
import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{

    renderForm = ( props ) => {
        console.log( "DispFullChn: hit the function with ", props );
    }

    render(){   
        return(
            <LedgerBlock name="dynamicChain" theChain={ this.props.block.chain } onSubmit={ () => this.renderForm() } /> 
        )
    }
};


const mapStateToProps = ( state ) => ( {
    block: state.block
} );

/*
DisplayFullChain = reduxForm({
    form: "blockArrays"
})( DisplayFullChain );
*/

export default connect( mapStateToProps, {} )( DisplayFullChain ); 

