import about from './about.jpg';
import React from 'react'

const About = () => {
    return (
    	<div className="container">
        <div className="about-akash">
            <div className="akash-img">
               <img src={about} className="" alt="about" />  
            </div>
            <div className="akash-details">
                <h3>Akash Sen (senier Developer)</h3>
                
                <h2>I am a Creative Software Developer from India.</h2>
               
                <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua 
                enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.duis aute irure.</p>

				<p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit 
				anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

            </div>
        </div>
        </div>
    )
}

export default About;
