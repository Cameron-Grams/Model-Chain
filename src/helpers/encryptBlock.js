const SHA256 = require( 'crypto-js/sha256' );

const encryptBlock ={
    returnValue: ( message ) => {
        return SHA256( message ).toString();
    }
}; 

module.exports = { encryptBlock };