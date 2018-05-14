import React from 'react';

const Miner = ( props ) => {
    return(
        <div className="css-minerDiv" >
            <h2>{ props.minerName }: { props.balance }</h2>
        </div>
    )
}

export default Miner;