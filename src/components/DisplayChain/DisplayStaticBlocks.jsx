import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from '../../containers/Ledger/LedgerBlock'; 

const DisplayChain = ( props ) => {

    return(
    <div>

    { props.block.chain.map( ( block, id ) => ( 

         <LedgerBlock key={ id.toString() } blockIdentifier={ id.toString() } />

        ) 
    ) }

    </div> 
    )
};

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayChain ); 