import React from 'react';
import Carriage from '../../components/Carriage/Carriage'; 


const CryptoBlock = ( props ) => {
    const blockInChain = parseInt( props.blockIdentifier, 10 ) + 1;

    return(
        <Carriage >
            <h4>Block Title: { props.block.blockTitle }</h4>
            <h4>Block Data: { props.block.blockData }</h4>
            <p>Block Hash: { props.block.blockHash }</p>
            <p>Block Signature: { props.block.blockSignature }</p>
            <p>Key: { blockInChain }</p>
        </Carriage>
    )
}

export default CryptoBlock;