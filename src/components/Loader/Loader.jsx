import React from 'react';
import Circle from './Circle'; 


class Loader extends React.Component{

    state = {
        cy: 75,
        cyA: 75,
        cyB: 75,
        cyC: 75,
        cyD: 75,
        cyE: 75,
        currentAnimationTime: 0
    }


    componentDidMount(){ 
        const animate = () => {  
            const timeNow = this.state.currentAnimationTime;
            const newTime =  timeNow + 0.05;
//            const nextY = this.state.cy + ( Math.sin( this.state.currentAnimationTime ) );

            const nextY = ( modifier ) => {
                return this.state.cy + ( 15 * Math.sin( this.state.currentAnimationTime - modifier ) );
            }

            this.setState( { currentAnimationTime: newTime } );
            this.setState( { cyA: nextY( 1 ) } );
            this.setState( { cyB: nextY( -1 ) } );
            this.setState( { cyC: nextY( 1 ) } );
            this.setState( { cyD: nextY( -1 ) } );
            this.setState( { cyE: nextY( 1 ) } );

            this.rafid = requestAnimationFrame( animate );
        };
        this.rafid = requestAnimationFrame( animate );
    };


    componentWillUnmount(){
        cancelAnimationFrame( this.rafid );
    }

//   this.props.endAnimation();

    render(){   
        return(
            <div  >
                <svg width="300" height="150" >
                    < Circle cx={ 50 } cy={ this.state.cyA }   />
                    < Circle cx={ 100 } cy={ this.state.cyB }   />
                    < Circle cx={ 150 } cy={ this.state.cyC }   />
                    < Circle cx={ 200 } cy={ this.state.cyD }   />
                    < Circle cx={ 250 } cy={ this.state.cyE }   />
                </svg>
            </div>
        )
    };
};

export default Loader;
