import React from 'react';


const Circle = ( props ) => {
    return(
        <circle id={ props.circleName } cx={ props.cx } cy={ props.cy } r="20" />
    )
}


export default Circle; 