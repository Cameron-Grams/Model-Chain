import React from 'react';
import ReactAnimationFrame from 'react-animation-frame'; 


class Loader extends React.Component{

    onAnimationFrame(time) {
    }
    /*
    let currentAnimationTime = 0;
    let amplitude = 25;
    const centerY = 75;
    function animate(){
        ctrA.setAttribute( "cy", centerY + ( amplitude + Math.sin( currentAnimationTime ) ) );
        ctrB.setAttribute( "cy", centerY + ( amplitude + Math.sin( currentAnimationTime - 1 ) ) );
        ctrC.setAttribute( "cy", centerY + ( amplitude + Math.sin( currentAnimationTime - 2 ) ) );
        ctrD.setAttribute( "cy", centerY + ( amplitude + Math.sin( currentAnimationTime - 3 ) ) );
        ctrE.setAttribute( "cy", centerY + ( amplitude + Math.sin( currentAnimationTime - 4 ) ) );
        currentAnimationTime += 0.05;
        requestAnimationFrame( animate );
    };
    animate();
*/
//   this.props.endAnimation();

    render(){   
        return(
            <div  >
                <svg width="300" height="150" >
                    <circle id="css-loaderA" cx="50" cy={ "75" } r="20" ref={ node => this.circleA = node } />
                    <circle id="css-loaderB" cx="100" cy="75" r="20" />
                    <circle id="css-loaderC" cx="150" cy="75" r="20" />
                    <circle id="css-loaderD" cx="200" cy="75" r="20" />
                    <circle id="css-loaderE" cx={ 250 } cy={ 75 } r={ 20 } />
                </svg>
            </div>
        )
    };
};

export default  ReactAnimationFrame( Loader, 100 );
