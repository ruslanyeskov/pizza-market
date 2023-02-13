import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css'

const PizzaList = (props) => {
	const [pizza, setPizza] = useState([])
  
  async function fetchPizza() {
    const response = await axios.get('https://63ea1672e0ac9368d649e74e.mockapi.io/api/pizza/PizzaList')
    setPizza(response.data)
  } 

  useEffect(() => {
    fetchPizza()
  }, [])


  return (
    <section className="Pizza_block">
    	<img src="../img/kasiotore.jpeg" alt="pizza img" />
    	<div className="Pizza_list">
        	{pizza.map((elem,index) => 
        	  <div key={index} className="Pizza_item">
        	  	<img src="" alt="img" />       	  	
        	    <h2 className="Pizza_item_title">{elem.id}. {elem.title}</h2>
        	    <div className="Pizza_item_allprice">
        	      {elem.price.map((priceElem,index) => 
        	        <h4 key={index} className="Pizza_item_price">Price {priceElem}</h4>
        	      )}
        	    </div>
        	    <div className="Pizza_item_allsize">
        	      {elem.size.map((sizeElem,index) =>       	       	
        	        <div key={index}>
        	        {sizeElem}
        	        <input 
        	        key={index} 
        	        className="Pizza_item_size" 
        	        type="radio" 
        	        name={elem.title}
        	        />
        	        </div>
        	      )}
        	    </div>
        	    <h3 className="Pizza_item_sale">Sale {elem.sale}</h3>
       	 	    <h3 className="Pizza_item_descr">Ingredients: {elem.body}</h3>  
        	  </div>
        	)} 	
    	</div>
      </section>
  )
}

export default PizzaList;