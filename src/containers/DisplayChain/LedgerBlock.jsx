import React from 'react';
import { connect } from 'react-redux'; 
import Carriage from '../../components/Carriage/Carriage'; 


const LedgerBlock = ( props ) => {

    return(
        <Carriage >
            <h2>Block Title: { props.block.blockTitle }</h2>
            <h4>Block Data: { props.block.blockData }</h4>
            <p>Block Hash: { props.block.blockHash }</p>
            <p>Block Signature: { props.block.blockSignature }</p>
            <p>Key: { props.blockIdentifier }</p>
        </Carriage>
    )
}
/*
export default connect( 
    ( state, props ) => {
        console.log( 'ledger block: state: ', state );
        console.log( 'ledger block state chain: ', state.block.chain );

        const block = state.currentBlock;
        const index = props.blockIdentifier;
        console.log( 'ledger block: index: ', index );
        const initialValues = {};
    
        if ( props.fromChain ){
            initialValues.blockTitle = state.block.chain[ index ].blockTitle;
            initialValues.blockData = state.block.chain[ index ].blockData;
            initialValues.blockHash = state.block.chain[ index ].blockHash;
            initialValues.blockSignature = state.block.chain[ index ].blockSignature;
        }
        return{
            initialValues
        }
    }, {} )( LedgerBlock );
*/

export default LedgerBlock;