import React from 'react';
import './IntroText.css'; 

const IntroText = ( props ) => (
    <div className="css-IntroText">
        <div className="css-textBox">
            { props.text }
        </div>
    </div>
);

export default IntroText; 