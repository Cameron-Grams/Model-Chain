import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            displayChain: this.props.block.chain,
            currentChain: this.props.block.chain
        }
    }

    evaluateBlockInput = ( values, blockNumber ) => {
        const adjustChain = this.state.currentChain;
        adjustChain[ blockNumber ].blockData = values;
        this.setState( { currentChain: adjustChain } );
    }

    prepareBlocks = () => {
            let baseId = 0;
            const initialChain = ( this.state.displayChain.map( ( block, index ) => {

                const colorCode = block.blockHash === this.props.block.chain[ index ].blockHash 
                    ? "css-goodBlock"
                    : "css-badBlock"; 

                return{
                    ...block,
                    blockNumber: baseId++,
                    blockColorCode: colorCode
                }
            } ) ) 
            this.setState( { currentChain: initialChain } );
        };

    componentDidMount(){
        this.prepareBlocks();
    }

    render(){   

        let blockObjectArray = this.state.currentChain;

        let displayedChain = blockObjectArray.map( ( block, id ) =>  (
            <LedgerBlock key={ block.blockNumber } blockNumber={ block.blockNumber } 
                blockColorCode={ block.blockColorCode }
                blockKey={ block.id } block={ block } 
                onEvaluation={ ( values, blockNumber ) => this.evaluateBlockInput( values, blockNumber ) } />
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

