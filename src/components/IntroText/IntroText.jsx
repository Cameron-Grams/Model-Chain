import React from 'react';
import './IntroText.css'; 

const IntroText = ( props ) => (
    <div className="css-IntroText">
        <div className="css-textBox">
            <p className={ props.textClass } >{ props.text }</p>
        </div>
    </div>
);

export default IntroText; 