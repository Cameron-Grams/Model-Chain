import React from 'react';
import { connect } from 'react-redux'; 
import Miner from './Miner';
import './MinerComponent.css'; 

const ShowMiners = ( props ) => {
    return(
        <div className="css-minerComponentOuterShell">
            <Miner minerName={ "A" } balance={ props.miner.balanceMinerA } />
            <Miner minerName={ "B" } balance={ props.miner.balanceMinerB } />
            <Miner minerName={ "C" } balance={ props.miner.balanceMinerC } />
        </div>
    )


}

const mapStateToProps = ( state ) => ( {
    miner: state.miner
})

export default connect( mapStateToProps, {} )( ShowMiners );