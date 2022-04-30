import React from 'react'
import web from './images/web-development.png';
import design from './images/ui-ux-design.png';
import server from './images/server-configuration.png';
import speed from './images/speed-optimize.png';

const Services = () => {


    return (
    	<div className="container">
           <div className="main_services service-page clearfix">

              <div className="single_service">
                 <div className="feature_item">
                    <img src={web} alt="Web Development" />
                    <div className="feat_part">
                        <h4>Web Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                         anim id est laborum.</p>
                    </div>    
                  </div>
              </div>

              <div className="single_service">
                 <div className="feature_item">
                    <img src={design} alt="UI/UX design" />
                    <div className="feat_part">
                        <h4>UI/UX design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                         anim id est laborum.</p>
                    </div>    
                  </div>
              </div>

              <div className="single_service">
                 <div className="feature_item">
                    <img src={server} alt="Server Configuration" />
                    <div className="feat_part">
                        <h4>Server Configuration</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                         anim id est laborum.</p>
                    </div>    
                  </div>
              </div>

              <div className="single_service">
                 <div className="feature_item">
                    <img src={speed} alt="Seo Optimize" />
                    <div className="feat_part">
                        <h4>Speed Optimize</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                         anim id est laborum.</p>
                    </div>
                  </div>
              </div>
           </div>
        </div>
    )
}

export default Services;
