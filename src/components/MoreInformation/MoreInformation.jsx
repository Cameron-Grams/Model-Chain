import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../Header/Header'; 
import IntroText from '../IntroText/IntroText';
import './MoreInformation.css';

const MoreInformation = ( props ) => {
    return(
        <Aux>
            <Header currentPage={ "informationPage" }/>
            <IntroText  textClass={ "css-information" } text={ "Page for additional information." } />
        </Aux>
    )
}


export default MoreInformation;