import React from 'react'; 
import { connect } from 'react-redux'; 
import Carriage from '../../../components/Carriage/Carriage'; 
import LedgerBlockForm from '../LedgerBlockForm'; 
import { setCurrentAction, addNewBlockToChain } from '../../../actions/blockActions'; 
import { encryptBlock } from '../../../helpers/encryptBlock'; 
import './GeneratorBlock.css';

const GeneratorBlock = ( props ) => {

    let blockChainPosition = 0;

    const receiveBlock = ( values ) => {
        const previousBlockSignature = props.block.chain[ blockChainPosition ].blockSignature;
        const { blockTitle, blockData } = values; 
        const { nonce, signature } = encryptBlock.signature( blockTitle, blockData, previousBlockSignature ); 
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
        blockChainPosition += 1;
    };

    return(
            <Carriage > 
                < LedgerBlockForm formClassName={ "css-blockForm" } onSubmit={ ( values ) => receiveBlock( values ) } /> 
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

