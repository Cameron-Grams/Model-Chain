import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    block: {},
    chain: []
};

const blockReducer = ( state = initialState, action ) => {

    switch( action.type ){
        case actionTypes.setCurrentBlock:{
            console.log( '[blockReducer ] with data: ', action.data );
            return {
                ...state,
                block: action.data
            };
        };

        default:{
            return state;
        }
    }
}

export default blockReducer; 