import React from 'react';
import { connect } from 'react-redux'; 
import Loader from '../../../components/Loader/Loader'; 
import Miner from './Miner';
import './MinerComponent.css'; 

const ShowMiners = ( props ) => {

    const minerArray = [ "A", "B", "C" ];

    let minerStatus = props.miner.mining ? 
        <Loader /> :
        <h3 className="css-minerStatus" >Miner { minerArray[ props.miner.earnedCoin ] } earned the coins.</h3>;

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