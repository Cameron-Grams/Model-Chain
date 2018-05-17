import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import Explanation from '../../components/Explanation/Explanation'; 
import IntroText from '../../components/IntroText/IntroText'; 
import Block from '../Block/Block';
import LedgerBlock from './LedgerBlock/LedgerBlock'; 
import './Ledger.css';

const Ledger = ( props ) => {

    const ledgerText = (
        <div>
            <p>The explanation of how a block provides enhanced security</p>
            <p>Something more about the process...</p>
        </div>
    )

    const ledgerExplanation = <IntroText  textClass={ "css-currency" } text={ ledgerText } />

    return(
        <Aux>
            
            <Header currentPage={ "ledgerPage" }/>
            <Explanation explanationText={ ledgerExplanation } whichExplanation={ "Distributed Ledger" }/>
            <Block addToChain={ true }/>
            <LedgerBlock />
        </Aux>
    )
}

export default Ledger;