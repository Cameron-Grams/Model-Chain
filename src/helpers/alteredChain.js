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

    console.log( 'Genesis block: ', newChain[ 0] ); 

    for ( let i = 1; i < chainLength; i++ ){



        let currentBlock = newChain[ i ];        
        currentBlock.blockHash = encryptBlock.returnValue( `${ currentBlock.blockTitle }${ currentBlock.blockData }` );
        const { nonce, signature } = encryptBlock.signature( currentBlock.blockTitle, currentBlock.blockData, newChain[ i - 1 ].blockSignature ); 
        console.log( 'Position: ', i ); 
        console.log( 'in altered chain with previous signature: ', newChain[ i - 1 ].blockSignature );
        console.log( 'in original chain with previous signature: ', originalChain[ i - 1 ].blockSignature );
        console.log( '   ...   ' );
        currentBlock.nonce = nonce;
        currentBlock.blockSignature = signature; 
    }

    for ( let j = 0; j < chainLength; j++ ){
        const evaluatedBlock = newChain[ j ];
        const originalBlock = originalChain[ j ]; 
        if( evaluatedBlock.blockSignature !== originalBlock.blockSignature ){
            newChain[ j ].blockColorCode = "css-badBlock"; 
        }
    }

    return newChain;
}

