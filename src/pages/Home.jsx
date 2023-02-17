import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios'
import PizzaList from '../components/PizzaList.jsx';
import Slider from '../components/UI/slider/Slider.jsx'

const Home = () => {

  return (
    <div className="Container"> 
      <Slider />        
    	<h1>Главная</h1>
      <PizzaList />
    </div>
  )
}

export default Home;