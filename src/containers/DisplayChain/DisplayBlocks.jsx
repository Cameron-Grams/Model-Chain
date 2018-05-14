import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from './LedgerBlock'; 

const DisplayChain = ( props ) => {

    const testLength = props.block.chain.length >= 1;

    return(
    <div>
        { props.block.chain.map( ( block, id ) => ( 
            <LedgerBlock fromChain={ testLength } key={ id.toString() } blockIdentifier={ id.toString() } />
            ) 
        ) }
    </div> 
    )
};

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayChain ); 