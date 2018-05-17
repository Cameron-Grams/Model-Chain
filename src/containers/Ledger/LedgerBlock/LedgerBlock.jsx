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

export default LedgerBlock;