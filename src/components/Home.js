import React from 'react'
import Features from './Features';
import './Navbar.css';
import Productlist from './Productlist';


const Home = () => {
  return (
    <>
  <section className="home container" id="home">
            <div className="content">
              <span className="faster "> <span className='text-teal font-semibold'>More than faster</span> </span>
                <h3>Be The Fastest In Delivering Your <span className='pizza'>Pizza</span> </h3>
                <button className='button'>Order Now</button>
          
            </div>

            <div className="image">
                <img src="images/delivery.png" alt=""/>
            </div>
        </section>

        <Features/>
        <Productlist/>
        
    </>
  )
}

export default Home