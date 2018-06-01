import React from 'react';
import { connect } from 'react-redux'; 
import Header from '../../components/Header/Header';
import Explanation from '../../components/Explanation/Explanation';
import IntroText from '../../components/IntroText/IntroText'; 
import { singleBlockText } from './singleBlockText'; 
import Block from './Block'; 

const SingleBlockDisplay = ( props ) => {

    const blockExplanation = <IntroText  textClass={ "css-currency" } text={ singleBlockText } />

    return(
    < React.Fragment >
        <Header currentPage={ "blockPage" } />
        <div className={ "css-divCap"}></div>
        <Explanation explanationText={ blockExplanation } whichExplanation={ "Block on the Blockchain" }/>
        <Block  />
    </ React.Fragment >
    )
}

const mapStateToProps = ( state ) => ( {
    block: state.block
})

export default connect( mapStateToProps, {} )( SingleBlockDisplay ); 