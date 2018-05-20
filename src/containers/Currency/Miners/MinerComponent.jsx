import React from 'react';
import { connect } from 'react-redux'; 
import Miner from './Miner';
import './MinerComponent.css'; 

const ShowMiners = ( props ) => {

    const minerArray = [ "A", "B", "C" ];

    let minerStatus = props.miner.mining ? 
        "Miners Mining..." :
        `Miner ${ minerArray[ props.miner.earnedCoin ] } earned the coins.`;

    return(
        <div>
            <div className="css-minerComponentOuterShell">
                <Miner minerName={ "A" } balance={ props.miner.balanceMinerA } />
                <Miner minerName={ "B" } balance={ props.miner.balanceMinerB } />
                <Miner minerName={ "C" } balance={ props.miner.balanceMinerC } />
            </div>
            <h3 className={ "css-minerStatus" } >{ minerStatus }</h3>
        </div>
    )


}

const mapStateToProps = ( state ) => ( {
    miner: state.miner
})

export default connect( mapStateToProps, {} )( ShowMiners );