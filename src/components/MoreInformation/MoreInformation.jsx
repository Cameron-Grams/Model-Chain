import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../Header/Header'; 
import IntroText from '../IntroText/IntroText';
import './MoreInformation.css';

const MoreInformation = ( props ) => {
    return(
        <Aux>
            <Header />
            <IntroText  textClass={ "css-information" } text={ "This will be the Mining for Currency" } />
        </Aux>
    )
}


export default MoreInformation;