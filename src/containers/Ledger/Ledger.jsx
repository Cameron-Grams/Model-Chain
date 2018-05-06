import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import './Ledger.css';

const Ledger = ( props ) => {
    return(
        <Aux>
            <Header />
            <div className="css-ledger">This will be the Ledger</div>
        </Aux>
    )
}


export default Ledger;