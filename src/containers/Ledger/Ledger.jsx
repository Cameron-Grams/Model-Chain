import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import IntroText from '../../components/IntroText/IntroText'; 
import Block from '../Block/Block';
import DisplayChain from './DisplayChain'; 
import './Ledger.css';

const Ledger = ( props ) => {
    return(
        <Aux>
            
            <Header currentPage={ "ledgerPage" }/>
            <p>placeholder</p>
            <Block addToChain={ true }/>
            <DisplayChain  />
        </Aux>
    )
}


export default Ledger;


//              < IntroText textClass={ "css-ledger" } text={ "This will be the Ledger" } />
