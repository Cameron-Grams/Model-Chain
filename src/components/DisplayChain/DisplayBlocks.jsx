import React from 'react'; 
import { connect } from 'react-redux'; 
import Block from '../../containers/Block/Block'; 

const DisplayChain = ( props ) => {

    return(
    <div>

    { props.block.chain.map( ( block, id ) => ( 

         <Block key={ id.toString() } blockIdentifier={ id.toString() } />

        ) 
    ) }

    </div> 
    )
};

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayChain ); 