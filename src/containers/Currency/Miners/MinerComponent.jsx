import React from 'react';
import Miner from './Miner';
import './MinerComponent.css'; 

const ShowMiners = ( prop ) => {
    return(
        <div className="css-minerComponentOuterShell">
            <Miner minerName={ "A" } balance={ "0"} />
            <Miner minerName={ "B" } balance={ "0"} />
            <Miner minerName={ "C" } balance={ "0"} />
        </div>
    )


}



export default ShowMiners;