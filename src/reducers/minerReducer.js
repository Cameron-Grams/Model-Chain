import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    balanceMinerA: 0,
    balanceMinerB: 0,
    balanceMinerC: 0
};

const minerArray = [ "balanceMinerA", "balanceMinerB", "balanceMinerC" ];

const minerReducer = ( state = initialState, action ) => {
    const successfulMiner = minerArray[ action.miner ]; 
    switch( action.type ){
        case actionTypes.rewardMiner:{
            return{
                ...state,
                [ successfulMiner ]: state[ successfulMiner ] + 10
            }
        }

        default:{
            return{ ...state };
        }
    }
}


export default minerReducer; 