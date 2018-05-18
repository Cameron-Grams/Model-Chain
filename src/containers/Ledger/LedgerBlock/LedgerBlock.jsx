import React from 'react';
import Carriage from '../../../components/Carriage/Carriage'; 

class LedgerBlock extends React.Component{
    state = {
        masterChain: this.props.chain
    }
  
/*
the role of this component will be to take the chain from the redux store and render stateful 
componts that are able to be evaluated against the values from state.
this will involve having the state ( chain ) values accessible, able to be identified
and able to be compared to the components rendered and accessible through their own inputs


start here:

https://stackoverflow.com/questions/42807901/react-input-element-value-vs-default-value

then here:
https://stackoverflow.com/questions/34321128/render-array-of-inputs-in-react


*/
  newInputValue = ( value, index ) => {
// read in the new value: 
// need to identify the block by index
// need to modify that block based on input



      this.setState( { } ); 

      console.log(      );

  }

  readNewBlockEntry = ( e ) => {
// call the comparison logic
  }

  render(){   


    return(
      <div>
      { this.props.theChain.map( ( block, index ) => (    
          <Carriage  >
          <form key={ index } onSubmit={ this.readNewBlockEntry.bind( this, index ) }>
              <p>Block Title: { block.blockTitle }</p>
              <p>Data:</p>
              <input value={ block.blockData } onChange={ ( value ) => this.newInputValue( value, index ) } ></input>
              <p>Block Hash: { block.blockHash }</p>
              <p>Block Signature: { block.blockSignature }</p>
              <p>Key: { index + 1 }</p>
          </form>
          </Carriage>
      ) ) }
      </div> )
  };
};

export default LedgerBlock;
/*
// render forms for data and 
//  - dynamic calculation of hash that will lead to changes in class
//        - these changes in class will depend on the comparision of the current values ( in that block and the others derived from it )
//          with the value for the given blocks held in state in the Redux store
//  > can we do the same for the signature? 
// static values for:
//   - block title 
//   - block number
<Field className={ "css-chainBlockInput" } name={ `block_${ index }` } component="input" type="text"/>

*/