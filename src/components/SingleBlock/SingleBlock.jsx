import React from 'react'; 
import { encryptBlock } from '../../helpers/encryptBlock'; 
import './SingleBlock.css'; 


class SingleBlock extends React.Component {
    constructor( props ) {
      super( props );
      this.state = { 
          blockName: '',
          blockData: '',  
          blockValue: ''
      };
  
      this.handleChange = this.handleChange.bind( this );
      this.handleSubmit = this.handleSubmit.bind( this );
    }
  
    handleChange( event ) {
        const target = event.target;
        const name = target.name;
        this.setState( { 
            [ name ]: event.target.value,
        } );
    }
  
    //using redux this is where we bring in the dispatched function from props...
    handleSubmit( event ) {
        const totalText = this.state.blockName + this.state.blockData;
        const signature = encryptBlock.returnBlock( totalText );
        this.setState( {
            blockValue: signature
        })
        console.log( signature ); 
        event.preventDefault();
    }
  
    render() {
      return (
          <div className="css-singleBlockDiv" >

            <form onSubmit={this.handleSubmit}>
                <div className="css-singleBlockName">
                <label>
                    <p>Block Name:</p>
                    <input name="blockName" className="css-singleBlockEntry" type="textarea" value={ this.state.blockName } onChange={ this.handleChange } />
                </label>
                </div>

                <div className="css-singleBlockData" >
                <label>
                    <p>Data:</p>
                    <textarea name="blockData" className="css-singleBlockEntry" value={ this.state.data } onChange={ this.handleChange } /> 
                </label>
                </div>

                <input  type="submit" value="Submit" />
            </form>
            <div className="css-singleBlockSignature" >
                <p>The Signature of the Block: </p>
                <p>{ this.state.blockValue }</p>
            </div>
        </div>
      );
    }
  }

  export default SingleBlock;