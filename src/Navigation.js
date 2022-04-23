import React ,{useState} from 'react';
import { Route, Router,Routes,Link }  from 'react-router-dom'
import hamburger from './images/hamburger_icon.svg';


const Navigation = () => {
 
   
    return (
        <>
        <a className="hamburger-icon">
          <img src={hamburger} />
        </a>
        <ul>
        <li>
        <Link to="/">Home </Link>
        </li>
        <li>
         <Link to="/about">About Us </Link>
        </li> 
        <li>
         <Link to="/map" >Map</Link>
        </li>
        <li> 
         <Link to="/contact" >Contact</Link>
        </li>
         </ul>

         
         </>
      );
}

export default Navigation
