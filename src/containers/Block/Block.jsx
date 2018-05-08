import React from 'react'; 
import { connect } from 'react-redux'; 
import Aux from '../../helpers/Aux';
import Carriage from '../../components/Carriage/Carriage'; 
import Header from '../../components/Header/Header'; 
import BlockForm from './BlockForm'; 
//import SingleBlock from '../../components/SingleBlock/SingleBlock'; 
import IntroText from '../../components/IntroText/IntroText'; 
import { setCurrentAction } from '../../actions/blockActions'; 
import { encryptBlock } from '../../helpers/encryptBlock'; 
import './Block.css';

const Block = ( props ) => {

    const receiveBlock = ( values ) => {
        console.log( 'from the form receiving: ', values ); 
        const { blockTitle, blockData } = values; 
        const { nonce, signature } = encryptBlock.signature( blockTitle, blockData ); 
        const finalBlock = {
            nonce: nonce,
            signature: signature,
            blockTitle: blockTitle,
            blockData: blockData,
            blockHash: encryptBlock.returnValue( `${ blockTitle }${ blockData }` )
        }     
        props.setCurrentAction( finalBlock ); 
    };


    return(
        <Aux>
            <Header currentPage={ "blockPage" } />
            <IntroText text={ "Provide a description of the actions of a single block" } />
            <Carriage > 
                < BlockForm formClassName={ "css-blockForm" } onSubmit={ ( values ) => receiveBlock( values ) } /> 
                <div className={ "css-blockSignatureDiv" } >
                    <p>Nonce: { props.block.currentBlock.currentNonce }   </p>
                    <p>Block Signature: { props.block.currentBlock.currentSignature }</p>
                </div>
            </Carriage >
        </Aux>
    )
}

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, { setCurrentAction } )( Block ); 

