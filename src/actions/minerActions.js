export function startMining(){
    return( {
        type: 'START_MINING',
    })
}

export function stopMining(){
    return( {
        type: 'STOP_MINING'
    })
}

export function rewardMiner( miner ){
    return{
        type: 'REWARD_MINER',
        miner
    }
};

