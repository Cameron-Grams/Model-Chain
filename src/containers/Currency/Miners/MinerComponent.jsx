import React from 'react';
import { connect } from 'react-redux'; 
import Loader from '../../../components/Loader/Loader'; 
import Carriage from '../../../components/Carriage/Carriage';
import Miner from './Miner';
import './MinerComponent.css'; 

const ShowMiners = ( props ) => {

    const minerArray = [ "A", "B", "C" ];

    let miningBegun = props.miner.miningStarted ? <h3 className="css-minerStatus" >Miner { minerArray[ props.miner.earnedCoin ] } earned the coins.</h3>
        : null;
    let minerStatus = props.miner.nowMining ? 
        <Carriage><Loader /></Carriage> : miningBegun;
        
    return(
        <div>
            <div className="css-minerComponentOuterShell">
                <Miner minerName={ "A" } balance={ props.miner.balanceMinerA } />
                <Miner minerName={ "B" } balance={ props.miner.balanceMinerB } />
                <Miner minerName={ "C" } balance={ props.miner.balanceMinerC } />
            </div>
            { minerStatus }
        </div>
    )


}

const mapStateToProps = ( state ) => ( {
    miner: state.miner
})

export default connect( mapStateToProps, {} )( ShowMiners );