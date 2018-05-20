import React from 'react'; 
import { connect } from 'react-redux'; 
import Carriage from '../../components/Carriage/Carriage'; 
import MinedBlockForm from './MinedBlockForm'; 
import { setCurrentAction, addNewBlockToChain } from '../../actions/blockActions'; 
import { startMining, stopMining, rewardMiner } from '../../actions/minerActions'; 
import { encryptBlock } from '../../helpers/encryptBlock'; 
import '../Block/Block.css';

const Block = ( props ) => {

    const obtainSignature = ( title, data ) => {
        const chainLength = props.block.chain.length;
        const previousSignature = props.block.chain[ chainLength - 1 ].blockSignature; 
        return encryptBlock.signature( title, data, previousSignature );
    }

    const mineBlock = ( values ) => {
        props.startMining(); 
        const { blockTitle, blockData } = values; 
        const { nonce, signature } = obtainSignature( blockTitle, blockData ); 
        const finalBlock = {
            nonce: nonce,
            signature: signature,
            blockTitle: blockTitle,
            blockData: blockData,
            blockHash: encryptBlock.returnValue( `${ blockTitle }${ blockData }` )
        }     

        const minerId = Math.floor( Math.random() * 3 ); 
        props.stopMining();
        props.setCurrentAction( finalBlock ); 
        props.addNewBlockToChain( finalBlock );
        props.rewardMiner( minerId );
    };

    return(
            <Carriage > 
                < MinedBlockForm formClassName={ "css-blockForm" } onSubmit={ ( values ) => mineBlock( values ) } /> 
                <div className={ "css-blockSignatureDiv" } >
                    <p>Nonce: { props.block.currentBlock.blockNonce }   </p>
                    <p>Block Signature: { props.block.currentBlock.blockSignature }</p>
                </div>
            </Carriage >
    )
}

const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, { startMining, stopMining, setCurrentAction, addNewBlockToChain, rewardMiner } )( Block ); 

