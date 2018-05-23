import React from 'react';
import Carriage from '../../../components/Carriage/Carriage'; 

class LedgerBlock extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            currentBlockDataValue: ''
        };
        this.readNewBlockEntry = this.readNewBlockEntry.bind( this ); 
        this.newInputValue = this.newInputValue.bind( this );
    }

    componentDidMount( props ){
        this.setState( { currentBlockDataValue: this.props.block.blockData })
    }
    newInputValue = ( event ) => {
        this.setState( { currentBlockDataValue: event.target.value } ); 
    }

    readNewBlockEntry = ( event ) => {
        console.log( 'in ledger block, values: ', this.state.currentBlockDataValue );
        this.props.onEvaluation( this.state.currentBlockDataValue );
        event.preventDefault();
    }

    render(){   

        return(
        <div>
            <Carriage  >
            <form  onSubmit={ this.readNewBlockEntry }>
                <p>Block Title: </p>
                <p>{ this.props.block.blockTitle }</p>
                <p>Data:</p>
                <input value={ this.state.currentBlockDataValue } onChange={ this.newInputValue } ></input>
                <p>Block Hash: </p>
                <p>{ this.props.block.blockHash }</p>
                <p>Block Signature: </p>
                <p>{ this.props.block.blockSignature }</p>



                <p>Block: { this.props.block.blockNumber }</p>
            </form>
            </Carriage>
        </div> 
        )
    };
};

export default LedgerBlock;
