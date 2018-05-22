import React from 'react'; 
import { connect } from 'react-redux'; 
import Carriage from '../../../components/Carriage/Carriage'; 
import BlockForm from '../../Block/BlockForm'; 
import { setCurrentAction, addNewBlockToChain } from '../../../actions/blockActions'; 
import { encryptBlock } from '../../../helpers/encryptBlock'; 
import './GeneratorBlock.css';

const GeneratorBlock = ( props ) => {

    const endOfChain = props.block.chain.length - 1;
    const previousBlock = props.block.chain[ endOfChain ];

    const receiveBlock = ( values ) => {
        const { blockTitle, blockData } = values; 
        const { nonce, signature } = encryptBlock.signature( blockTitle, blockData, previousBlock ); 
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
                    <p>Nonce: { props.block.currentBlock.blockNonce }   </p>
                    <p>Block Signature:</p> 
                    <p>{ props.block.currentBlock.blockSignature }</p>
                </div>
            </Carriage >
    )
}

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, { setCurrentAction, addNewBlockToChain } )( GeneratorBlock ); 

