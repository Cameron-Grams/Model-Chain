import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    currentBlock: {
        currentTitle: '',
        currentData: '',
        currentHash: null,
        currentNonce: 0,
        currentSignature: ''
    },
    chain: []
};

const blockReducer = ( state = initialState, action ) => {
//    let currentTitle, currentData, currentHash, currentNonce, currentSignature; 


    const newBlock = ( action ) => {
        return {  
        currentTitle: action.data.blockTitle,
        currentData: action.data.blockData,
        currentHash: action.data.blockHash,
        currentNonce: action.data.nonce,
        currentSignature: action.data.signature
        };
    };


    switch( action.type ){
        case actionTypes.setCurrentBlock:{
            return {
                ...state,
                currentBlock: newBlock( action )
            };
        }

        case actionTypes.addNewBlockToChain:{
            
            let updatedChain = state.chain;
            let targetData = newBlock( action );
            updatedChain.push( targetData );

            return {
                ...state,
               chain: updatedChain
            };
        }

        default:{
            return state;
        }
    }
}

export default blockReducer; 