export function setCurrentAction ( newBlock ){
    return( {
        type: 'SET_CURRENT_BLOCK', 
        data: newBlock
    } );
};
