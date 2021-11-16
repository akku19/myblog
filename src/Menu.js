import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

const Menu = () => {

	return(
		<>	
		<NavLink to="/">Home</NavLink>
		<NavLink to="/about">About</NavLink>
		<NavLink to="/skills">Skills</NavLink>
		<NavLink to="/works">Works</NavLink>
		<NavLink to="/contact">Contact</NavLink>
		</>
		);

};

export default Menu;