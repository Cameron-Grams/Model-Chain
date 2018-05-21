import React from 'react';
import { connect } from 'react-redux'; 
import Header from '../../components/Header/Header';
import Explanation from '../../components/Explanation/Explanation';
import IntroText from '../../components/IntroText/IntroText'; 
import Block from './Block'; 

const SingleBlockDisplay = ( props ) => {

    const blockText = (
        <div>
            <p>The explanation of how a block is encrypted</p>
            <p>Something more about the process...</p>
        </div>
    )

    const blockExplanation = <IntroText  textClass={ "css-currency" } text={ blockText } />

    return(
    < React.Fragment >
        <Header currentPage={ "blockPage" } />
        <div className={ "css-divCap"}></div>
        <Explanation explanationText={ blockExplanation } whichExplanation={ "Block of the Blockchain" }/>
        <Block  />
    </ React.Fragment >
    )
}

const mapStateToProps = ( state ) => ( {
    block: state.block
})

export default connect( mapStateToProps, {} )( SingleBlockDisplay ); 