import React from 'react'; 
import Header from '../../components/Header/Header'; 
import IntroText from '../../components/IntroText/IntroText'; 
import Loader from '../../components/Loader/Loader';
import './Main.css'; 

const Main = ( props ) => {
    return(
      <div className="css-main">
        <Header currentPage={ "mainPage" }/> 
        <IntroText textClass="css-bodyIntroText" text={ "Describe the purpose of the app" } /> 
        <Loader />
      </div>
    )
};

export default Main;
