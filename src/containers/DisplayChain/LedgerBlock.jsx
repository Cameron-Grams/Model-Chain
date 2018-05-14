import React from 'react';
import { connect } from 'react-redux'; 
import Carriage from '../../components/Carriage/Carriage'; 


const LedgerBlock = ( props ) => {

    return(
        <Carriage >
            <h2>Block Title: { props.block.currentBlock.blockTitle }</h2>
            <h4>Block Data: { props.block.currentBlock.blockData }</h4>
            <p>Block Hash: { props.block.currentBlock.blockHash }</p>
            <p>Block Signature: { props.block.currentBlock.blockSignature }</p>
            <p>Key: { props.blockIdentifier }</p>
        </Carriage>
    )
}

export default connect( 
    ( state, props ) => {
        const block = state.currentBlock;
        const index = props.key;
        const initialValues = {};
        if ( props.fromChain ){
            initialValues.blockTitle = state.chain[ index ].blockTitle;
            initialValues.blockData = state.chain[ index ].blockData;
            initialValues.blockHash = state.chain[ index ].blockHash;
            initialValues.blockSignature = state.chain[ index ].blockSignature;
        }
        return{
            ...state,
            initialValues
        }
    }, {} )( LedgerBlock );

