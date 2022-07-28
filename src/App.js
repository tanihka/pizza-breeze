import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'
import Cart from './components/Cart';
import Products from './components/Products';

import { CartContext } from './CartContext';
import { useEffect, useState } from 'react'
// import { getCart, storeCart } from './helpers';



const App = () => {
  const [cart, setCart] = useState({});
  // Fetch cart from local storage
  // useEffect(() => {
  //   getCart().then(cart => {
  //     setCart(JSON.parse(cart));
  //   });
  // }, []);

  // useEffect(() => {
  //   storeCart(JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);





  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            {/* <Route path='/products/:_id' exact element={<SingleProduct />}></Route> */}
            <Route path='/cart' element={<Cart />} />

          </Routes>
        </CartContext.Provider>

      </BrowserRouter>
    </>
  )
}
 
export default App