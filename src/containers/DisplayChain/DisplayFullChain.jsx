import React from 'react'; 
import { connect } from 'react-redux'; 
// import { reduxForm } from 'redux-form'
// import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            displayChain: this.props.block.chain
        }
    }

    render(){   
        console.log( this.props.block.chain )
        return(
        <div>
            <p></p>

            <p>Here is the display chain: { this.state.displayChain[ 0 ].blockTitle }</p>
        </div>
        ) 
    }
};


const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayFullChain ); 

