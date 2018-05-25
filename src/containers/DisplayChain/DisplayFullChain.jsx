import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            mainChain: this.props.block.chain,
            currentChain: []
        }
    }

    evaluateBlockInput = ( values, blockNumber ) => {
        const adjustChain = this.state.currentChain;
        adjustChain[ blockNumber ].blockData = values;
        this.setState( { currentChain: adjustChain } );
    }

    prepareBlocks = ( givenChain ) => {
            let baseId = 0;
            const initialChain = ( givenChain.map( ( block, index ) => {

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
        this.prepareBlocks( this.props.handedChain );
    }

    render(){   

        let displayedChain = ( displayChain ) => displayChain.map( ( block, id ) =>  (
                <LedgerBlock key={ id } blockNumber={ block.blockNumber } 
                    blockColorCode={ block.blockColorCode }
                    blockKey={ block.id } block={ block } 
                    onEvaluation={ ( values, blockNumber ) => this.evaluateBlockInput( values, blockNumber ) } />
                ) 
        ).reverse();

        return(
            <div>
                { displayedChain( this.state.currentChain ) }
            </div>
        ) 
    }
};


const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {} )( DisplayFullChain ); 

