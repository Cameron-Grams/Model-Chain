import React from 'react'; 
import Header from '../../components/Header/Header'; 
import './Main.css'; 

const Main = ( props ) => {
    return(
        <div className="css-main">
          <Header /> 

          <div className="css-MainIntroText">
            <div className="css-textBox">
              <p className="css-bodyIntroText" >Describe what we are doing...</p>
            </div>
          </div>
        </div>
    )
};

export default Main;