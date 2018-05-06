export function setCurrentAction ( newBlock ){
    console.log( 'in block action with ', newBlock );
    return( {
        type: 'SET_CURRENT_BLOCK', 
        data: newBlock
    } );
};
