import React from 'react'; 
import { connect } from 'react-redux'; 
import LedgerBlock from '../Ledger/LedgerBlock/LedgerBlock'; 

class DisplayFullChain extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            mainChain: this.props.block.chain,
        }
    }

    evaluateBlockInput = ( values, blockNumber ) => {
        console.log( "in display full chain: values: ", values, blockNumber );
    }

    /*
    create a state condition to reflect that the chain has or has not been altered
        - this condition will have to be reset to false once the chain has been remined or added to
        - true will force an assessment of the displayed chain with new values from the altered block
        - having this condition true will lead to rendering the altered chain, false will lead to the handedChain
        

        THis is the functionality that may work best as a component of the Redux state...


        const displayedChain = hasBeenAltered ? this.props.block.alteredChain: this.props.HandedChain; 
            - here the alteredChain would come from the global state
            - calculations can be performed there
    */



   render(){   

        let displayedChain = true ? this.props.handedChain: null;

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

export default connect( mapStateToProps, {} )( DisplayFullChain ); 

