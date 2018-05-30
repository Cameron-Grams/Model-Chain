import React from 'react'; 
import { connect } from 'react-redux'; 
import { sendAlteredChain } from '../../actions/blockActions';
import { recalculateChain } from '../../helpers/alteredChain'; 
import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            mainChain: this.props.block.chain,
        }
    }

    evaluateBlockInput = ( values, blockNumber ) => {
        let newChain = JSON.parse( JSON.stringify( [ ...this.state.mainChain ] ) );
        newChain[ blockNumber ].blockData = values;
        newChain = recalculateChain( newChain, blockNumber, this.props.block.chain ); 
        this.props.sendAlteredChain( newChain );
    }


   render(){   

        let displayedChain = this.props.block.hasBeenAltered ? this.props.block.alteredChain: this.props.block.chain; 


        return(
            <div>
                
                { displayedChain.map( ( block, id ) =>  (
                        <LedgerBlock key={ id } blockNumber={ id.toString() } 
                            blockKey={ block.id } block={ block } 
                            onEvaluation={ ( values, blockNumber ) => this.evaluateBlockInput( values, blockNumber ) } />
                        ) 
                ).reverse()
                }
            </div>
        ) 
    }
};


const mapStateToProps = ( state ) => ( {
    block: state.block
} );

export default connect( mapStateToProps, {  sendAlteredChain } )( DisplayFullChain ); 

