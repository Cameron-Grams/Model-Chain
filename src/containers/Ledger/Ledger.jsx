import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import Explanation from '../../components/Explanation/Explanation'; 
import IntroText from '../../components/IntroText/IntroText'; 
import GeneratorBlock from './GeneratorBlock/GeneratorBlock';
import DisplayFullChain from '../DisplayChain/DisplayFullChain'; 
import './Ledger.css';

const Ledger = ( props ) => {

    const ledgerText = (
        <div>
            <p>The explanation of how a block provides enhanced security</p>
            <p>Something more about the process...</p>
            <p>Click To Close</p>
        </div>
    )

    const ledgerExplanation = <IntroText  textClass={ "css-currency" } text={ ledgerText } />

    return(
        <Aux>
            <Header currentPage={ "ledgerPage" }/>
            <div className={ "css-divCap"}></div>
            <Explanation explanationText={ ledgerExplanation } whichExplanation={ "Distributed Ledger" }/>
            <GeneratorBlock addToChain={ true }/>
            <DisplayFullChain />
        </Aux>
    )
}

export default Ledger;