import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    currentBlock: {
        blockTitle: '',
        blockData: '',
        blockHash: null,
        blockNonce: 0,
        blockSignature: ''
    },
    chain: []
};

const blockReducer = ( state = initialState, action ) => {
//    let currentTitle, currentData, currentHash, currentNonce, currentSignature; 


    const newBlock = ( action ) => {
        return {  
        blockTitle: action.data.blockTitle,
        blockData: action.data.blockData,
        blockHash: action.data.blockHash,
        blockNonce: action.data.nonce,
        blockSignature: action.data.signature
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