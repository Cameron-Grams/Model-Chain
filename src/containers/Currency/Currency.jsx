import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import IntroText from '../../components/IntroText/IntroText';
import './Currency.css';

const Currency = ( props ) => {
    return(
        <Aux>
            <Header />
            <IntroText  textClass={ "css-currency" } text={ "This will be the Mining for Currency" } />
        </Aux>
    )
}


export default Currency;