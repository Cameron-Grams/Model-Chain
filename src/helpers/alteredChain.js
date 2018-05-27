const recalculateChain = ( array ) => {
    console.log( 'in altered chain module wit array: ', array );
}



/*
the first essential task is to take in the array of block objects and return an array of block objects with the new values

new values will require reassessing the signatures and hashes and then capturing those new values as properties of the objects
in the new chains

the class of the blocks will need to be evaluated based on the comparison of old and new signature and hash 

*/

const altered = {
    reassess: ( array ) => recalculateChain( array )
};


module.exports = altered; 