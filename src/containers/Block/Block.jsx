import React from 'react'; 
import { connect } from 'react-redux'; 
import Aux from '../../helpers/Aux';
import Header from '../../components/Header/Header'; 
import BlockForm from './BlockForm'; 
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
            < BlockForm onSubmit={ ( values ) => receiveBlock( values ) } /> 
        </Aux>
    )
}

const mapStateToProps = ( state ) => ( {
    blockReducer: state.blockReducer
} );

export default connect( mapStateToProps, { setCurrentAction } )( Block ); 

