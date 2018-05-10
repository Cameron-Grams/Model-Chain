import React from 'react';
import Header from '../../components/Header/Header';
import IntroText from '../../components/IntroText/IntroText'; 
import Block from './Block'; 

const DisplayBlock = ( props ) => {
    return(
    < React.Fragment >
        <Header currentPage={ "blockPage" } />
        <IntroText text={ "Provide a description of the actions of a single block" } />
        <Block addToChain={ true } />
    </ React.Fragment >
    )
}

export default DisplayBlock; 