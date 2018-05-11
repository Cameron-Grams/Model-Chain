import React from 'react';
import { connect } from 'react-redux'; 
import Header from '../../components/Header/Header';
import IntroText from '../../components/IntroText/IntroText'; 
import Block from './Block'; 

const DisplayBlock = ( props ) => {
    return(
    < React.Fragment >
        <Header currentPage={ "blockPage" } />
        <IntroText text={ "Provide a description of the actions of a single block" } />
        <Block  />
    </ React.Fragment >
    )
}

const mapStateToProps = ( state ) => ( {
    block: state.block
})

export default connect( mapStateToProps, {} )( DisplayBlock ); 