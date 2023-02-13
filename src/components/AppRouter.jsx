import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Onmap from '../pages/Onmap.jsx';
import Navbar from './Navbar.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar /> 	
    	<Routes>
          <Route path="/Onmap" element={<Onmap /> } />  
          <Route path="/" element={<Home /> } />
          <Route path="*" element={<Home /> } />           
    	</Routes>           
    </BrowserRouter>
  )
}

export default AppRouter;