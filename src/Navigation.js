import React, { useState, useRef } from 'react';
import { Route, Router,Routes,Link }  from 'react-router-dom'
import hamburger from './images/hamburger_icon.svg';


const Navigation = () => {
 
   const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   }

    return (
        <>
        <a className="hamburger-icon">
          <img onClick={ToggleClass} src={hamburger} />
        </a>
        <ul className={isActive ? "inactive" : "active"}>
        <li>
        <Link to="/">Home </Link>
        </li>
        <li>
         <Link to="/about">About Us </Link>
        </li> 
        <li>
         <Link to="/services" >Services</Link>
        </li>
        <li> 
         <Link to="/contact" >Contact</Link>
        </li>
         </ul>

         
         </>
      );
}

export default Navigation
