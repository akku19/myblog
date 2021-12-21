import React ,{useState} from 'react';
import { Route, Router,Routes,Link }  from 'react-router-dom'



const Navigation = () => {
 
   
    return (
        <>
        <Link to="/">Home </Link>
         <Link to="/about">About Us </Link>
         <Link to="/map" >Map</Link>
         <Link to="/croping" >croping</Link>
         </>
      );
}

export default Navigation
