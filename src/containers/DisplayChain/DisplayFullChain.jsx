import React from 'react'; 
import { connect } from 'react-redux'; 
// import { reduxForm } from 'redux-form'
import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{

    render(){   
        return(
            { this.state.localChain.map( ( block, index ) => {    

                <LedgerBlock name="dynamicChain" theChain={ this.props.block.chain } /> 
            }
        ) }
    }
};


const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayFullChain ); 

