export function setCurrentAction ( newBlock ){
    return( {
        type: 'SET_CURRENT_BLOCK', 
        data: newBlock
    } );
};

export function addNewBlockToChain ( newBlock ){
    return( {
        type: 'ADD_NEW_BLOCK_TO_CHAIN', 
        data: newBlock
    } );
};
