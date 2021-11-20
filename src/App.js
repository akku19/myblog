import React from 'react'
import PropTypes from 'prop-types'
import { Route, Router,Routes,Link }  from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound'
import Header from './Header';
import Content  from './Content';

const App = () => {
  return (
    <>
    <Header />
    <div className="contents">
     <Routes>
        <Route path="/" exact element={<Content />} /> 
        <Route path="/about" exact   element={<About />} /> 
        <Route path="*" element={<NotFound/>}/>
       </Routes>
     </div>
    </>
  )
}
export default App ;
