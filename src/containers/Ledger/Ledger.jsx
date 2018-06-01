import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import Explanation from '../../components/Explanation/Explanation'; 
import IntroText from '../../components/IntroText/IntroText'; 
import GeneratorBlock from './GeneratorBlock/GeneratorBlock';
import DisplayFullChain from '../DisplayChain/DisplayFullChain'; 
import { ledgerBlockText } from './ledgerBlockText'; 
import './Ledger.css';

const Ledger = ( props ) => {

    const ledgerExplanation = <IntroText  textClass={ "css-currency" } text={ ledgerBlockText } />

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