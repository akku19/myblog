import React from 'react'
import PropTypes from 'prop-types'
import { Route, Router,Routes,Link }  from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound'
import Header from './Header';
<<<<<<< HEAD
import Content  from './Content';
=======
>>>>>>> 9ce9ee7bab7b6b050529b7d41f4d112134ab6a12

const App = () => {
  return (
    <>
<<<<<<< HEAD
 
    <div className="contents">
     <Routes>
        <Route path="/" exact element={<Content />} /> 
        <Route path="/about" exact   element={<About />} /> 
=======
    <Header />
    <div className="contents">
     <Routes>
        <Route path="/" exact element={<About />} /> 
        <Route path="/about" exact   element={<Contact />} /> 
>>>>>>> 9ce9ee7bab7b6b050529b7d41f4d112134ab6a12
        <Route path="*" element={<NotFound/>}/>
       </Routes>
     </div>
    </>
  )
}
<<<<<<< HEAD
export default App ;
=======

App.propTypes = {

}

export default App
>>>>>>> 9ce9ee7bab7b6b050529b7d41f4d112134ab6a12
