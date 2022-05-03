import pic from './akash-img.webp';
import logo from './logo.png';
import web from './images/web-development.png';
import design from './images/ui-ux-design.png';
import server from './images/server-configuration.png';
import speed from './images/speed-optimize.png';
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
           <h3>My Name is <span>Akash sen</span></h3>
           <h2>I am a Creative <span>Web Developer.</span></h2>
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

        <div className="container">
         <div className="services">
        <h2>Service Offers</h2>
        <p className="sub_service">Is give may shall likeness made yielding spirit a itself togeth created after sea
is in beast beginning signs open god you're gathering ithe</p>
  
       <div className="main_services clearfix">

          <div className="single_service">
             <div className="feature_item">
                <img src={web} alt="Web Development" />
                <h4>Web Development</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudin pellentesque</p>
              </div>
          </div>

          <div className="single_service">
             <div className="feature_item">
                <img src={design} alt="UI/UX design" />
                <h4>UI/UX design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudin pellentesque</p>
              </div>
          </div>

          <div className="single_service">
             <div className="feature_item">
                <img src={server} alt="Server Configuration" />
                <h4>Server Configuration</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudin pellentesque</p>
              </div>
          </div>

          <div className="single_service">
             <div className="feature_item">
                <img src={speed} alt="Seo Optimize" />
                <h4>Speed Optimize</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudin pellentesque</p>
              </div>
          </div>
</div>
      </div>
    </div>

      <div className="testimonial_home container">
          <h2>Client say about me</h2>
          <p className="sub_service">Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast
beginning signs open god you're gathering ithe</p>

        <div className="client_say">
          <div className="item-client">
             <div className="client_img">
                <img src={logo} />
             </div>
             <div className="client_details">
                <h2>Elite Martin</h2>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
             </div>
          </div>


          <div className="item-client">
             <div className="client_img">
                <img src={logo} />
             </div>
             <div className="client_details">
                <h2>Elite Martin</h2>
                <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
             </div>
          </div>

          

        </div>

      </div>



      <div className="subscription_box">
         <h2>get update from anywhere</h2>
         <p>Bearing Void gathering light light his eavening unto dont afraid.</p>
         <form action="#" method="post">
            <input type="email" className="form-input" placeholder="Email Address" />
            <a type="submit" className="btn">Get Started</a>
         </form>
      </div>


<footer>
  <div className="copyright">Copyright © 2022</div>
</footer>

      </div>


      

   	);
}

export default Content;