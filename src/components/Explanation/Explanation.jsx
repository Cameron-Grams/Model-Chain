import React from 'react';

import './Explanation.css'; 


class Explanation extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            showText: false
        }
    }

    changeDisplay = () => {
        this.setState( { showText: !this.state.showText } )
    }

    render(){
        const displayText = this.state.showText ? this.props.explanationText 
            : <h3 className="css-explanationFormat" >Explanation of a { this.props.whichExplanation }</h3>

        return(
            <div className={ "css-explanationDiv" } onClick={ () => this.changeDisplay() } >
            { displayText }
            </div>
        )
    };
}

export default Explanation;