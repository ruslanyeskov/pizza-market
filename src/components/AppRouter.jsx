import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from '../pages/Home.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter> 	
    	<Routes>
          <Route path="/" element={<Home /> } />           
    	</Routes>           
    </BrowserRouter>
  )
}

export default AppRouter;