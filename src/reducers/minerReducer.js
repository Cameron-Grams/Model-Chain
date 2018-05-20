import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    nowMining: false,
    earnedCoin: null,
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
                [ successfulMiner ]: state[ successfulMiner ] + 10,
                earnedCoin: action.miner
            }
        }

        default:{
            return{ ...state };
        }
    }
}


export default minerReducer; 