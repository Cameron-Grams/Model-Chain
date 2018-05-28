import React from 'react';
import Carriage from '../../../components/Carriage/Carriage'; 

class LedgerBlock extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            currentBlockDataValue: this.props.block.blockData,
            blockNumber: this.props.blockNumber
        };
        this.readNewBlockEntry = this.readNewBlockEntry.bind( this ); 
        this.newInputValue = this.newInputValue.bind( this );
    }

    componentDidMount( props ){
        this.setState( { 
            currentBlockDataValue: this.props.block.blockData,
            blockNumber: this.props.blockNumber
        })
    }
    newInputValue = ( event ) => {
        this.setState( { currentBlockDataValue: event.target.value } ); 
    }

    readNewBlockEntry = ( event, ) => {
        event.preventDefault();
        console.log( 'in ledger block, with block number: ', this.state.blockNumber ); 
        this.props.onEvaluation( this.state.currentBlockDataValue, this.state.blockNumber );
        return false;
    }

    render(){   

        return(
        <div key={ this.props.blockNumber } >
            <Carriage  >
            <form  onSubmit={ this.readNewBlockEntry }>
              <div className={ `css-ledgerBlock ${ this.props.block.blockColorCode }` } >
                <label >Block Title: { this.props.block.blockTitle }</label>
              </div>
                <h4>Data:</h4>
                <input type="input" value={ this.state.currentBlockDataValue } onChange={ this.newInputValue } ></input>
                <p>Block Hash: </p>
                <p>{ this.props.block.blockHash }</p>
                <p>Block Signature: </p>
                <p>{ this.props.block.blockSignature }</p>
                <p>Block: { this.props.blockNumber }</p>
            </form>
            </Carriage>
        </div> 
        )
    };
};

export default LedgerBlock;
