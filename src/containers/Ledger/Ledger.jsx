import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import IntroText from '../../components/IntroText/IntroText'; 
import './Ledger.css';

const Ledger = ( props ) => {
    return(
        <Aux>
            <Header currentPage={ "ledgerPage" }/>
            < IntroText textClass={ "css-ledger" } text={ "This will be the Ledger" } />
        </Aux>
    )
}


export default Ledger;