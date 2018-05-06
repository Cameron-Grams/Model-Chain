import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import './Currency.css';

const Currency = ( props ) => {
    return(
        <Aux>
            <Header />
            <div className="css-currency" >This will be the Mining for Currency</div>
        </Aux>
    )
}


export default Currency;