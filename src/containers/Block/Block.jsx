import React from 'react'; 
import { connect } from 'react-redux'; 
import Aux from '../../helpers/Aux';
import Carriage from '../../components/Carriage/Carriage'; 
import Header from '../../components/Header/Header'; 
// import BlockForm from './BlockForm'; 
import SingleBlock from '../../components/SingleBlock/SingleBlock'; 
import IntroText from '../../components/IntroText/IntroText'; 
import { setCurrentAction } from '../../actions/blockActions'; 
import './Block.css';

const Block = ( props ) => {

    const receiveBlock = ( values ) => {
        console.log( 'from the form receiving: ', values ); 
        props.setCurrentAction( values ); 
    };


    return(
        <Aux>
            <Header />
            <IntroText text={ "Provide a description of the actions of a single block" } />
            <Carriage > 
                <SingleBlock /> 
            </Carriage >
        </Aux>
    )
}

const mapStateToProps = ( state ) => ( {
    blockReducer: state.blockReducer
} );

export default connect( mapStateToProps, { setCurrentAction } )( Block ); 
