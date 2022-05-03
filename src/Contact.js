import React, { useState } from 'react';
import Iframe from 'react-iframe';
import Footer from './Footer'

const Contact = () => {    
    const [formdata,setformdata] = useState([]);

    const filddata = (e)=>{
       console.log('data',e);
    }

    const formsubmit = (e)=>{
         
    }
    const demos = {
        soundcloud:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.754763691852!2d75.46976831495309!3d22.211424235369797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39626ee52edda903%3A0x1ed2db57bc871643!2sJhulelal%20Mandir%2C%20Near%20Old%20Bus%20Stand%2C%20Patel%20Colony%2C%20Dhamnod%2C%20Madhya%20Pradesh%20454552!5e0!3m2!1sen!2sin!4v1650613388025!5m2!1sen!2sin" width="100%" height="650" style="border:0;" allowfullscreen=""></iframe>',
      
        plotly:
          '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
      };

      function Iframe(props) {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
          />
        );
      }
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.754763691852!2d75.46976831495309!3d22.211424235369797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39626ee52edda903%3A0x1ed2db57bc871643!2sJhulelal%20Mandir%2C%20Near%20Old%20Bus%20Stand%2C%20Patel%20Colony%2C%20Dhamnod%2C%20Madhya%20Pradesh%20454552!5e0!3m2!1sen!2sin!4v1650613388025!5m2!1sen!2sin" width="100%" height="650" style="border:0;" allowfullscreen=""></iframe>'; 

    const[toggleclas,settoggleclas] =useState(false)
	const toggleclass = ()=>{
       (toggleclas) ? settoggleclas(false) : settoggleclas(true);
        
    }
      
    return (
    	<div className="container1">
        <div className='contact_title'>
            <h3>Looking for a reliable partner for your next project?</h3>
            <h2>Get In Touch With Us Today</h2>   
            <p>Consequat duis aute lorem ipsum dolor sit amet consectetur adipisicing elit eiusmod
tempor incididuntlabore duis irure dolor in sed reprehenderit.</p>

        </div>


        <div className= { (toggleclas) ? " b-map-form-holder map-active" :" b-map-form-holder" }>
        <div className="container">
            <div className="map-form-switcher">
                <div className="switcher-bg">

                    <span className="switcher-text text-uppercase">Form</span>
                    <span className="switcher-toggle" onClick={()=>{ toggleclass() }}>
                        <span className="icon"></span>
                    </span>

                    <span className="switcher-text text-uppercase">Map</span>
                </div>
            </div>
</div>
            <div className='b-map'>
                
    
            {/* <Iframe iframe={iframe} /> */}
            <Iframe iframe={demos["soundcloud"]} allow="autoplay" />
            
             </div>
            <div className='b-contact-form'>
                <div className='container'>
                    <form action='#' method='post'>
                        <input type="text" className='input-form' placeholder='Name' onClick={filddata()}/>
                        <input type="email" className='input-form' placeholder='E-mail'  onClick={filddata()} />  
                        <input type="text" className='input-form' placeholder='Subject'  onClick={filddata()} />  
                        <textarea cols="40" rows="10"className='input-form' placeholder='Message'  onClick={filddata()}></textarea>
                        <input type="submit" className='input-submit' value='Send Message'  onClick={formsubmit()}/>
                    </form>
                </div>
            </div>
        </div>
        
        </div>

        
    )
}

export default Contact;
