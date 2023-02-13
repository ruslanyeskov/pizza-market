import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PizzaList from '../components/PizzaList.jsx';

const Home = () => {


  return (
    <div>           
    	<h1>home page</h1>
      <PizzaList />
    </div>
  )
}

export default Home;