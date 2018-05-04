import React from 'react'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import './DemoBlock.css';

const DemoBlock = ( props ) => {
    return(
        <Aux>
            <Header />
            <div className="css-demoBlock">This will be a block</div>
        </Aux>
    )
}


export default DemoBlock;