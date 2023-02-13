import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  return (
    <header>
 		<nav> 		    
  			<Link to="/">Home</Link>
  			<Link to="/Onmap">Map</Link>
    	</nav>
    </header>
  )
}

export default Navbar;