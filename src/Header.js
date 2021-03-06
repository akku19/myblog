import logo from './logo.png';
import React from "react";
import ReactDOM from "react-dom";
import Navigation from './Navigation';

function Header() {
  return (

  	<div className="box-header"> 
  	 <div className="container">
  	 <header className="main_header">
      <div className="logo">
      <a href="/">
          <img src={logo} className="" alt="logo" />
          </a>
      </div>
      <div className="menu">     
              <Navigation /> 
      </div>          
    </header>
   </div>
   </div>
  );
}
export default Header;