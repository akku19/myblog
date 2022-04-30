import React from 'react'
import PropTypes from 'prop-types'
import { Route, Router,Routes,Link }  from 'react-router-dom'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import NotFound from './NotFound'
import Header from './Header';
import Content from './Content'
import Mapfunction from './Mapfunction';
import Imagecrop from './Imagecrop';

const App = () => {
  return (
    <>
    <Header />
    <div className="contents">
     <Routes>
        <Route path="/" exact element={<Content />} /> 
        <Route path="/about" exact   element={<About />} /> 
        <Route path="*" element={<NotFound/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        
    
       </Routes>
     </div>
    </>
  )
}
export default App ;
