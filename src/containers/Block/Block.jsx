import React from 'react'; 
import { connect } from 'react-redux'; 
import Carriage from '../../components/Carriage/Carriage'; 
import BlockForm from './BlockForm'; 
import { setCurrentAction, addNewBlockToChain } from '../../actions/blockActions'; 
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

        if ( props.addToChain ){
            props.addNewBlockToChain( finalBlock );
        }
    };

    return(
            <Carriage > 
                < BlockForm formClassName={ "css-blockForm" } onSubmit={ ( values ) => receiveBlock( values ) } /> 
                <div className={ "css-blockSignatureDiv" } >
                    <p>Nonce: { props.block.currentBlock.currentNonce }   </p>
                    <p>Block Signature: { props.block.currentBlock.currentSignature }</p>
                </div>
            </Carriage >
    )
}

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, { setCurrentAction, addNewBlockToChain } )( Block ); 

