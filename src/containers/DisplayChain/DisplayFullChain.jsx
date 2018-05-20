import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            displayChain: this.props.block.chain
        }
    }

    evaluateBlockInput = ( values ) => {
        console.log( 'disp full chain with values: ', values ); 
    }

    render(){   
        const prepareBlocks = () => {
            let baseId = 0;
            return( this.state.displayChain.map( block => {
                return{
                    ...block,
                    blockNumber: baseId++
                }
            } ) ) 
        };

        let blockObjectArray = prepareBlocks();

        const displayedChain = blockObjectArray.map( ( block, id ) =>  (
            <LedgerBlock key={ block.blockNumber } blockNumber={ block.blockNumber } blockKey={ block.id } block={ block } onEvaluation={ ( values ) => this.evaluateBlockInput( values ) } />
            ) 
        ).reverse();

        return(

        <div>
            { displayedChain }
        </div>
        ) 
    }
};


const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayFullChain ); 

