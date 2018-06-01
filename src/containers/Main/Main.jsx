import React from 'react'; 
import Header from '../../components/Header/Header'; 
import IntroText from '../../components/IntroText/IntroText'; 
import { mainText } from './mainPageText'; 
import './Main.css'; 

const Main = ( props ) => {
    return(
      <div className="css-main">
        <Header currentPage={ "mainPage" }/> 
        <div className={ "css-divCap"}></div>
        <IntroText textClass="css-bodyIntroText" text={ mainText } /> 
      </div>
    )
};

export default Main;
