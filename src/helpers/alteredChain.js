const { encryptBlock } = require( './encryptBlock' );


export const recalculateChain = ( inputChain, blockNumber, originalChain ) => {

    let newChain = inputChain;

    const chainLength = newChain.length; 

    if ( blockNumber === 0 ){
        // previous values established for calculation
        newChain[ 0 ] = {
            ...newChain[ 0 ],
            blockHash: "Bad Hash",
            blockSignature: "Bad Signature",
            nonce: 222
        }
    }

    for ( let i = 1; i < chainLength - 1; i++ ){
        let currentBlock = newChain[ i ];        
        currentBlock.blockHash = encryptBlock.returnValue( `${ currentBlock.blockTitle }${ currentBlock.blockData }` );
        const { nonce, signature } = encryptBlock.signature( currentBlock.blockTitle, currentBlock.blockData, newChain[ i - 1 ].blockSignature ); 
        currentBlock.nonce = nonce;
        currentBlock.blockSignature = signature; 
    }


    console.log( 'in altered chain module wit array: ', newChain );
    console.log( 'in altered chain with array 2: ', originalChain ); 

    return newChain;
}

/*
    const receiveBlock = ( values ) => {
        const { blockTitle, blockData } = values; 
        const { nonce, signature } = encryptBlock.signature( blockTitle, blockData, previousBlock ); 
        const finalBlock = {
            nonce: nonce,
            signature: signature,
            blockTitle: blockTitle,
            blockData: blockData,
            blockHash: encryptBlock.returnValue( `${ blockTitle }${ blockData }` )
        }     

*/

