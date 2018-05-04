import React from 'react'; 
import Header from '../../components/Header/Header'; 
import './Main.css'; 

const Main = ( props ) => {
    return(
        <div className="App">
          <Header /> 

          <div className="css-MainIntroText">
              <p>Describe what we are doing...</p>
          </div>
        </div>
    )
};

export default Main;