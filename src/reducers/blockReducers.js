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

    switch( action.type ){
        case actionTypes.setCurrentBlock:{
            console.log( '[blockReducer ] with data: ', action.data );
            return {
                ...state,
                currentBlock: {
                    currentTitle: action.data.blockTitle,
                    currentData: action.data.blockData,
                    currentHash: action.data.blockHash,
                    currentNonce: action.data.nonce,
                    currentSignature: action.data.signature
                }
            };
        };

        default:{
            return state;
        }
    }
}

export default blockReducer; 