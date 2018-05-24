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
        console.log( 'in ledger block, values: ', this.state.currentBlockDataValue, ' and with block number ', this.props.blockNumber );
        this.props.onEvaluation( this.state.currentBlockDataValue, this.props.blockNumber );
        event.preventDefault();
    }

    render(){   

        return(
        <div>
            <Carriage  >
            <form  onSubmit={ this.readNewBlockEntry }>
              <div className={ this.props.blockColorCode } >
                <h4 >Block Title: { this.props.block.blockTitle }</h4>
              </div>
                <h4>Data:</h4>
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
