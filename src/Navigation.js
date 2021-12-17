import React ,{useState} from 'react';
import { Route, Router,Routes,Link }  from 'react-router-dom'



const Navigation = () => {
 
   
    return (
        <>
        <Link to="/">Home </Link>
         <Link to="/about">About Us </Link>
         </>
      );
}

export default Navigation
