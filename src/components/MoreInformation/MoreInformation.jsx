import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../Header/Header'; 
import IntroText from '../IntroText/IntroText';
import { moreInformationText } from './moreInformationText'; 
import './MoreInformation.css';

const MoreInformation = ( props ) => {
    return(
        <Aux>
            <Header currentPage={ "informationPage" }/>
            <div className={ "css-divCap" } ></div>
            <IntroText  textClass={ "css-information" } text={ moreInformationText } />
        </Aux>
    )
}


export default MoreInformation;