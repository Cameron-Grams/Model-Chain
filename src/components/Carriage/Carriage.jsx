import React from 'react';
import './Carriage.css'; 

const Carriage = ( props ) => (
    <div className="css-carriage">
      <div className="css-innerCarriage" >
        { props.children }
      </div>
      <div className="css-liftCarriage" ></div>
    </div>
);

export default Carriage;