import React from 'react'; 
import './Header.css'; 

const Header = ( props ) => {
    return(
        <div className="css-mainHeader" >
            <div className="css-headerDivision css-activeLink" >Left</div>
            <div className="css-headerDivision css-middle" ><h1>Model Chain</h1></div>
            <div className="css-headerDivision css-activeLink" ><a href="/single-block">Right</a></div>
        </div>
    )

}

export default Header;