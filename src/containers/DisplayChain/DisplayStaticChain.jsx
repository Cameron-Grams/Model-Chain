import React from 'react'; 
import { connect } from 'react-redux'; 
import CryptoBlock from '../Currency/CryptoBlock'; 

const DisplayStaticChain = ( props ) => {

    return(
    <div>
        { props.block.chain.map( ( block, id ) => ( 
            <CryptoBlock key={ id.toString() } block={ block } blockIdentifier={ id.toString() } />
            ) 
        ) }
    </div> 
    )
};

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayStaticChain ); 