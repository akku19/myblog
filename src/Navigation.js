import React ,{useState} from 'react';
import { Route, Router,Routes,Link }  from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound'
import Header from './Header';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';


const Navigation = () => {
    const [main, setmain] = useState(false);
    const [page,setpage] = useState('home');

    const Clickhome = ()=>{
       {main==false ? setmain(true) :setmain(false)}
       {page=='home' ? setpage('home') :setmain(false)}
        
    }
    const Clickabout= (e)=>{
        console.log(e.target.name);
        {main===false ? setmain('about') :setmain(false)}
        {main!= ''? setmain(e.target.name) :setmain(false)}
    }
   
    return (
        <If condition={main == false}>
          <Then>
          <div className="maindiv"> 
            <Link to="/" onClick={Clickabout} name='about'>home </Link>
            <Link to="/about" onClick={Clickabout} name='about'>About Us </Link>
            </div>
          </Then>
          <ElseIf condition={main == 'home' } >
          <Link to="/" name='home' onClick={Clickabout} name='home'>home</Link>
          <Link to='/' onClick={Clickabout} name='yes'>yes </Link>
          </ElseIf>
          <ElseIf condition={main == 'about'}>
          <Link to="/" onClick={Clickabout} name='home'>home</Link>
          <Link to="/about">About</Link>
          </ElseIf>
          <Else>
          <div className="maindiv"> 
            <Link to="/" onClick={Clickabout}>home </Link>
            <Link to="/about" onClick={Clickabout} name='about'>About Us </Link>
            </div>
          </Else>
        </If>
      );
}

export default Navigation
