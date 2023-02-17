import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  return (
    <header>
      <div className="Menu_wrapper">             
        <nav className="Menu_list"> 		    
  		  	<Link to="/" className="Menu_link">Главная</Link>
          <Link to="/news" className="Menu_link">Новости</Link>
          <Link to="/about" className="Menu_link">О нас</Link>
          <Link to="/findus" className="Menu_link">Карты</Link>
          <Link to="/history" className="Menu_link">История заказов</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;