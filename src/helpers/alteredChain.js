const { encryptBlock } = require( './encryptBlock' );


export const recalculateChain = ( inputChain, blockNumber ) => {
    const initialBlockSignature = '00c4ea2949f8a053c99a5480a7900f5da1a8f177e07d7558c78e47065e322009';
    let previousSignature; 
    let startBlock = blockNumber;
    let newChain = inputChain;
    const chainLength = newChain.length; 
 
    console.log( 'in altered chain with block number: ', blockNumber ); 

    for ( let i = startBlock; i < chainLength; i++ ){
        if ( i === "0" ){
            previousSignature = initialBlockSignature;
        } else {
            previousSignature = newChain[ i - 1 ].blockSignature;
        }
        let currentBlock = newChain[ i ];        
        currentBlock.blockHash = encryptBlock.returnValue( `${ currentBlock.blockTitle }${ currentBlock.blockData }` );
        const { nonce, signature } = encryptBlock.signature( currentBlock.blockTitle, currentBlock.blockData, previousSignature ); 
        currentBlock.nonce = nonce;
        currentBlock.blockSignature = signature; 
        currentBlock.blockColorCode = 'css-badBlock'; 
    }

    /*
    for ( let j = 0; j < chainLength; j++ ){
        const evaluatedBlock = newChain[ j ];
        const originalBlock = originalChain[ j ]; 
        if( evaluatedBlock.blockSignature !== originalBlock.blockSignature ){
            newChain[ j ].blockColorCode = "css-badBlock"; 
        }
    }
    */

    return newChain;
}

export const normalizeChain = ( oldChain ) => {

    let normalizedChain = [ ...oldChain ]; 

    for ( let i = 0; i < oldChain.length; i++ ){
        oldChain[ i ].blockColorCode = 'css-goodBlock'; 
    }

    return normalizedChain;
}



