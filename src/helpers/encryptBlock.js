const SHA256 = require( 'crypto-js/sha256' );

const deriveSignature = ( blockTitle, blockData, previousSignature = '' ) => {
 //   const calculationDifficulty = Math.floor( Math.random() * 6 );
    const calculationDifficulty = 6;
    console.log( 'working with difficulty: ', calculationDifficulty );
    let nonce = 0, signature = "99999"; 
    const calculateHash = ( ) => {
        return SHA256( previousSignature + blockData + blockTitle + nonce ).toString(); 
    }
    while( signature.substring( 0, calculationDifficulty ) !== Array( calculationDifficulty + 1 ).join( "0" ) ){
        nonce++;
        signature = calculateHash(); 
    }
    return { signature, nonce }; 
}

const encryptBlock ={
    returnValue: ( message ) => {
        return SHA256( message ).toString();
    },
    signature: ( blockTitle, blockData, previousSignature = '' ) => deriveSignature( blockTitle, blockData, previousSignature = '' )
}; 

module.exports = { encryptBlock };