import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Slider from './UI/slider/Slider.jsx';
import TopMenu from './TopMenu.jsx';
import Navbar from './Navbar.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import News from '../pages/News.jsx';
import FindUs from '../pages/FindUs.jsx';
import History from '../pages/History.jsx';


const AppRouter = () => {
  return (
    <BrowserRouter>    
      <TopMenu /> 
      <Navbar /> 	
    	<Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/About" element={<About /> } />
          <Route path="/News" element={<News /> } />  
          <Route path="/FindUs" element={<FindUs /> } /> 
          <Route path="/History" element={<History /> } />            
          <Route path="*" element={<Home /> } />           
    	</Routes>           
    </BrowserRouter>
  )
}

export default AppRouter;