import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import Explanation from '../../components/Explanation/Explanation'; 
import IntroText from '../../components/IntroText/IntroText';
import ShowMiners from './Miners/MinerComponent'; 
import MinedBlock from './MinedBlock'; 
import DisplayStaticChain from '../DisplayChain/DisplayStaticChain';
import { currencyBlockText } from './currencyBlockText'; 
import './Currency.css';

const Currency = ( props ) => {

    const currencyExplanation = <IntroText  textClass={ "css-currency" } text={ currencyBlockText } />

    return(
        <Aux>
            <Header currentPage={ "coinPage" }/>
            <div className={ "css-divCap" } ></div>
            <Explanation explanationText={ currencyExplanation } whichExplanation={ "CryptoCurrency" }/>
            <ShowMiners />
            <MinedBlock addToChain={ true }/>
            <DisplayStaticChain />
        </Aux>
    )
}


export default Currency;

