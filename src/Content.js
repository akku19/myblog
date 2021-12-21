import pic from './akash-img.png';
import React from "react";
import ReactDom from "react-dom";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Content() {
   return (
      <div className="top_banner">
        <div className="container">
         <div className="under_banner">
           <div className="banner_content">
           <h3>My Name is <span>Akash Sen</span></h3>
           <h2>I am a Creative <span>Software Developer.</span></h2>
           <p>I'm working on a professional, visually sophisticated and technologically proficeint, responsive and multi-functional Wordpress Website imroz. </p>
           <a href="https://wa.me/8770562180" className="contact-me-btn" target="_blank">Contact Me</a>

           <div className="social_media">
             <ul className="">
               <li>
	               <a href="https://www.facebook.com/akash.sen.108/">
	               <FontAwesomeIcon icon={faFacebook} />
	               </a>
               </li>
               <li>
	               <a href="https://www.linkedin.com/in/akash-sen-7bb874b8/">
	               <FontAwesomeIcon icon={faLinkedin} />
	               </a>
               </li>
               <li>
	               <a href="">
	               <FontAwesomeIcon icon={faInstagram} />
	               </a>
               </li>
               <li>
	               <a href="https://wa.me/8770562180">
	               <FontAwesomeIcon icon={faWhatsapp} />
	               </a>
               </li>
             </ul>
           </div>

           </div>
           <div className="developer_pic dd">
             <img src={pic} className="" alt="pic" />
           </div>
         </div>
        </div> 
      </div>
   	);
}

export default Content;