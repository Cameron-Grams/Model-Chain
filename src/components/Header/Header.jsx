import React from 'react'; 
import './Header.css'; 

const Header = ( props ) => {
    return(
        <div className="css-mainHeader" >
            <div className="css-headerDivision css-activeLink" ><a href="/" >Main</a></div>
            <div className="css-headerDivision css-middle" ><h1>Model Chain</h1></div>
            <div className="css-headerDivision css-activeLink" ><a href="/single-block">Block</a></div>
            <div className="css-headerDivision css-activeLink" ><a href="/ledger">Ledger</a></div>
            <div className="css-headerDivision css-activeLink" ><a href="/currency">Coins</a></div>
        </div>
    )

}

export default Header;