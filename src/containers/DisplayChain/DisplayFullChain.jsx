import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from './LedgerBlock'; 

// update the type of blocks to reflext the dynamic content....

const DisplayFullChain = ( props ) => {

    return(
    <div>
        { props.block.chain.map( ( block, id ) => ( 
            <LedgerBlock key={ id.toString() } block={ block } blockIdentifier={ id.toString() } />
            ) 
        ) }
    </div> 
    )
};

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayFullChain ); 