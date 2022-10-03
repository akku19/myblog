import logo from './logo.png';
import React from "react";
import ReactDOM from "react-dom";
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (

  	<div className="box-header"> 
  	 <div className="container">
  	 <header className="main_header">
      <div className="logo">
     <Link to='/'>
          <img src={logo} className="" alt="logo" />
          </Link>
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