import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import Explanation from '../../components/Explanation/Explanation'; 
import IntroText from '../../components/IntroText/IntroText';
import ShowMiners from './Miners/MinerComponent'; 
import MinedBlock from './MinedBlock'; 
import DisplayBlocks from '../DisplayChain/DisplayBlocks';
import './Currency.css';

const Currency = ( props ) => {

    const currencyText = (
        <div>
            <p>The explanation of how mining relates to validating a block in a distributed system</p>
            <p>Something more about the process...</p>
        </div>
    )

    const currencyExplanation = <IntroText  textClass={ "css-currency" } text={ currencyText } />

    return(
        <Aux>
            <Header currentPage={ "coinPage" }/>
            <Explanation explanationText={ currencyExplanation } whichExplanation={ "CryptoCurrency" }/>
            <ShowMiners />
            <MinedBlock addToChain={ true }/>
            <DisplayBlocks />
        </Aux>
    )
}


export default Currency;

