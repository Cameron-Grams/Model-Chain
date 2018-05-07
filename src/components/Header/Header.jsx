import React from 'react'; 
import './Header.css'; 

const Header = ( props ) => {
    let blockPageActive, mainPageActive, ledgerPageActive, coinPageActive, informationPageActive; 
    switch( props.currentPage ){
        case "mainPage":{
           mainPageActive = "css-currentPage";
           break;
        }
        case "blockPage":{
           blockPageActive = "css-currentPage"; 
           break;
        }

        case "ledgerPage":{
           ledgerPageActive = "css-currentPage"; 
           break;
        }

        case "coinPage":{
           coinPageActive = "css-currentPage"; 
           break;
        }

        case "informationPage":{
           informationPageActive = "css-currentPage"; 
           break;
        }

        default:{
           mainPageActive = "css-currentPage" 
        }
    }
    return(
        <div className="css-mainHeader" >
            <div className={ `css-headerDivision css-activeLink css-title ${ mainPageActive }` } ><h3><a href="/" >Model Chain</a></h3></div>
            <div className={ `css-headerDivision css-activeLink ${ blockPageActive }` } ><a href="/single-block">Block</a></div>
            <div className={ `css-headerDivision css-activeLink ${ ledgerPageActive }` } ><a href="/ledger">Ledger</a></div>
            <div className={ `css-headerDivision css-activeLink ${ coinPageActive }` } ><a href="/currency">Coins</a></div>
            <div className={ `css-headerDivision css-activeLink ${ informationPageActive }` } ><a href="/information">Information</a></div>
        </div>
    )

}

export default Header;
