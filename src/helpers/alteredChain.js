const { encryptBlock } = require( './encryptBlock' );


export const recalculateChain = ( inputChain, blockNumber, originalChain ) => {
    const initialBlockSignature = '00c4ea2949f8a053c99a5480a7900f5da1a8f177e07d7558c78e47065e322009';
    let previousSignature; 
    let startBlock = parseInt( blockNumber, 10 );
    const comparisonChain = [ ...originalChain ]; 
    let newChain = inputChain;
    const chainLength = newChain.length; 
    let newChainSignatures = []; 

    if ( blockNumber === "0" ){
            previousSignature = initialBlockSignature;
        } else {
            previousSignature = newChain[ startBlock - 1 ].blockSignature;
        }

    for ( let i = startBlock; i < chainLength; i++ ){
        console.log( 'in alt chain, input sig: ', previousSignature );
        let currentBlock = newChain[ i ];        
        currentBlock.blockHash = encryptBlock.returnValue( `${ currentBlock.blockTitle }${ currentBlock.blockData }` );
        const { nonce, signature } = encryptBlock.signature( currentBlock.blockTitle, currentBlock.blockData, previousSignature ); 
        console.log( 'in alt chain, with update sig: ', signature ); 
        currentBlock.nonce = nonce;
        currentBlock.blockSignature = signature; 
        newChainSignatures.push( signature ); 
//        currentBlock.blockColorCode = 'css-badBlock'; 
        previousSignature = signature;
    }

    for ( let j = 0; j < chainLength; j++ ){
        const evaluatedBlock = newChain[ j ];
        const originalBlock = comparisonChain[ j ]; 
//        console.log( 'in alt chain, altered  sig: ',  evaluatedBlock.blockSignature )
//        console.log( 'in alt chain, original sig: ',  originalBlock.blockSignature )
        if( evaluatedBlock.blockSignature !== originalBlock.blockSignature ){
            newChain[ j ].blockColorCode = "css-badBlock"; 
        }
    }

    return newChain;
}

export const normalizeChain = ( oldChain ) => {

    let normalizedChain = [ ...oldChain ]; 

    for ( let i = 0; i < oldChain.length; i++ ){
        oldChain[ i ].blockColorCode = 'css-goodBlock'; 
    }

    return normalizedChain;
}



