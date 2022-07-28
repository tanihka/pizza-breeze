import React from 'react'
import './Navbar.css';
import Product from './Product'
import { useState, useEffect,useContext } from 'react';
import { CartContext } from '../CartContext';



const Productlist = () => {
 const{name} = useContext(CartContext);

 
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://ecom-rest-apis.herokuapp.com/api/products')
    .then(response => response.json())
    .then(products=>{
      setProducts(products);
      console.log(products);
    });
  },[]);





  return (
    <>
      
      
      <div className="container mx-auto pb-24">
        <div className="text-center">
        <h1 className="text-lg  my-8"> <strong>PRODUCTS</strong> {name}</h1>
        </div>
        <div className="grid  my-10 gap-8 grid grid-cols-2 md:grid-cols-5">
          { 
          products.map(product => <Product key={product._id} product={product}/>)
          
          }
          
        </div>
      </div>

      

    </>
  )
}

export default Productlist
