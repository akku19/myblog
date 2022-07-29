import about from './about.jpg';
import about1 from './images/about1.jpg';
import React from 'react'
import Footer from './Footer'

const About = () => {
    return (
    	<div className="container1">
        <div className="container">
        <div className="about-akash">
            <div className="akash-img">
               <img src={about} className="" alt="about" />  
            </div>
            <div className="akash-details">
                <h3>Lorem Ipsum (senier Developer) </h3>
                
                <h2>I am a Creative Software Developer from India.</h2>
               
                <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua 
                enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.duis aute irure.</p>

				<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit 
				anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

            </div>
        </div>    
        </div>

        
           <div className="container">
        <div className="mission-about">
     
            <div className="mission-txt">
            <div>
                <h3>We grow brands</h3>
                <h2>Mission & Vision</h2>
                <p>Enim ad minim veniam quis nostrud exercitation ullam laboris nisi
                    utco aliquip exea pmmodo consequat duis aute. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit sed eiusmod tempor incididunt
                    labore duis irure dolor in reprehenderit.</p>
                <p>Magna aliqua Uat enim ad minim veniam quis nostrud exercit ation
                    ullamco laboris aliquip consequat.</p>  
            </div>        
            </div>  
            <div className="mission-img">
                <div className="brd"></div>
                <div className="img-cut">
                    <div className="cut"></div>
                    <img src={about1} />
                </div>
            </div>    
        </div>    
        </div>


<div className="gradiant_co">
        <div className=" container">
        <div className="projects_done">
          <div className="projects_content">
             <h2>How Projects Done! The Process</h2>
             <p>Mollit anim idm est laborum sed ut perspiciatis unde omniste voluptate macsit cusa ntium doloremque 
             laudantium totam labore dolore magna 
             aliquat enim ad minim veniam quis nost rctation ullamco laboris aliquip consequat sed ipsum dolore.</p>
             <a href="#" className="get_in_touch">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              Get In Touch</a>
          </div>
          <div className="projects_steps">
             <div className="featured-services-right  ">
    <div className="b-work-steps">
        
    
        <div className="b-services-item">
            <div className="services-icon work-active">
                <div className="circle-0">
                    <div className="circle-1">
                        <div className="circle-2">
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-text">
                <h6 className="services-title  customPseudoElBg font-secondary text-uppercase">
                    <span className="customColor">
                        1.
                    </span>
                    BRAINSTORMING
                </h6>
                <p>
                    Labore et dolore magna aliqua en minim veniam quis nostrud ulamc
                </p>
            </div>
        </div>
     
    
        <div className="b-services-item">
            <div className="services-icon ">
                <div className="circle-0">
                    <div className="circle-1">
                        <div className="circle-2">
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-text">
                <h6 className="services-title  customPseudoElBg font-secondary text-uppercase">
                    <span className="customColor">
                        2.
                    </span>
                    PROJECT SKETCHING
                </h6>
                <p>
                    Labore et dolore magna aliqua en minim veniam quis nostrud ulamc
                </p>
            </div>
        </div>
     
    
        <div className="b-services-item">
            <div className="services-icon ">
                <div className="circle-0">
                    <div className="circle-1">
                        <div className="circle-2">
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-text">
                <h6 className="services-title  customPseudoElBg font-secondary text-uppercase">
                    <span className="customColor">
                        3.
                    </span>
                    DESIGN &amp; DEVELOPMENT
                </h6>
                <p>
                    Labore et dolore magna aliqua en minim veniam quis nostrud ulamc
                </p>
            </div>
        </div>
     
    
        <div className="b-services-item">
            <div className="services-icon ">
                <div className="circle-0">
                    <div className="circle-1">
                        <div className="circle-2">
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-text">
                <h6 className="services-title  customPseudoElBg font-secondary text-uppercase">
                    <span className="customColor">
                        4.
                    </span>
                    PROJECT DELIVERED
                </h6>
                <p>
                    Labore et dolore magna aliqua en minim veniam quis nostrud ulamc
                </p>
            </div>
        </div>
        </div>
</div>
 </div>
 </div>
          </div>
          <Footer />
        </div>

        </div>

        
       
    )
}

export default About;
