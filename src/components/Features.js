import React from 'react'
import './features.css';


const Features = () => {
  return (
    <section className="container">
        <div className="features"><span><strong className='text-lg'> FEATURES</strong></span>
        <h3>Our Awesome Features</h3>
        </div>
       

        <div className="grid  my-10 gap-8 grid grid-cols-1 md:grid-cols-4 place-items-center	">
        <div className="feature items-center">
          <img src="/images/food-pana.svg" alt="" />
          <div className="text-center">
          <h2 className='feature-name'>Best Quality</h2>
          <p className='pb-8	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
         </div>

         <div className="feature items-center">
          <img src="/images/Away-cuate.svg" alt="" />
          <div className="text-center">
          <h2 className='feature-name'>Best Quality</h2>
          <p  className='pb-8	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
         </div>

         <div className="feature items-center">
          <img src="/images/5995357.jpg" alt="" />
          <div className="text-center">
          <h2 className='feature-name'>Best Quality</h2>
          <p className='pb-8	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
         </div>

         <div className="feature items-center">
          <img src="/images/5995357.jpg" alt="" />
          <div className="text-center">
          <h2 className='feature-name'>Best Quality</h2>
          <p className='pb-8	'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
         </div>

        
          


        
        </div>
    </section>
  )
}

export default Features