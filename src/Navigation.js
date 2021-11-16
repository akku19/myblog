import PropTypes from 'prop-types'
import { Route, Router,Routes,Link }  from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound'
import Header from './Header';


const Navigation = () => {
    return (
        <>
       
         <Link to="/">Home </Link>
         <Link to="/about">About Us </Link>
      
        </>
    )
}

export default Navigation
