import * as actionTypes from '../actions/actionTypes'; 

const genesisBlock = {
    blockTitle: 'Genesis',
    blockData: 'Genesis',
    blockHash: '7b7d41ad02ad1711aa61dc9fc09e4483c546cecf905aaaef3e6149e3f24ec7c7',
    blockNonce: '266',
    blockSignature: '00c4ea2949f8a053c99a5480a7900f5da1a8f177e07d7558c78e47065e322009',
    blockColorCode: 'css-goodBlock'
}

const initialState = {
    currentBlock: {
        blockTitle: '',
        blockData: '',
        blockHash: null,
        blockNonce: 0,
        blockSignature: '',
        blockColorCode: 'css-goodBlock'
    },
    chain: [ genesisBlock ],
    hasBeenAltered: false,
    alteredChain: []
};

const blockReducer = ( state = initialState, action ) => {

    const newBlock = ( action ) => {
        return {  
        blockTitle: action.data.blockTitle,
        blockData: action.data.blockData,
        blockHash: action.data.blockHash,
        blockNonce: action.data.nonce,
        blockSignature: action.data.signature,
        blockColorCode: 'css-goodBlock'
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

        case actionTypes.sendAlteredChain:{

            return{
                ...state,
                hasBeenAltered: !state.hasBeenAltered,
                alteredChain: action.data
            }
        }

        default:{
            return state;
        }
    }
}

export default blockReducer; 