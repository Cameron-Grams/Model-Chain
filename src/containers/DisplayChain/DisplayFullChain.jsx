import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from './LedgerBlock'; 

// update the type of blocks to reflext the dynamic content....
// read in the field array from the array 
// https://redux-form.com/7.3.0/examples/fieldarrays/
// https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e
// https://hackernoon.com/higher-order-components-hocs-for-beginners-25cdcf1f1713


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