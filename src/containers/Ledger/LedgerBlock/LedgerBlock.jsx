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

    newInputValue = ( event ) => {
        this.setState( { currentBlockDataValue: event.target.value } ); 
        console.log( 'the event traget in question: ', event.target ); 
        console.log( 'sent new value: ', event.target.value, ' to state' );
    }

    readNewBlockEntry = ( event ) => {

        console.log( 'this is the form event: ', event ); 
        event.preventDefault();
    }

    render(){   
        return(
        <div>
            <Carriage key={ index } >
            <form key={ index } onSubmit={ this.readNewBlockEntry }>
                <p>Block Title: { block.blockTitle }</p>
                <p>Data:</p>
                <input value={ this.state.currentBlockDataValue } onChange={ this.newInputValue } ></input>
                <p>Block Hash: { block.blockHash }</p>
                <p>Block Signature: { block.blockSignature }</p>
                <p>Block: { index + 1 }</p>
            </form>
            </Carriage>
        </div> 
        )
    };
};

export default LedgerBlock;
