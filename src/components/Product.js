
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const Product = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const { product } = props;

    const addToCart = (event, product) => {
        let _cart = {...cart}; // { items: {}}
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
          setIsAdding(false);
        }, 1500);
      }








  return (
    <>
    
    <div className='box'>
   
            <img src={product.image} alt=''/>
            <div className="text-center my-2">
              <h3 className='mb-2'>{product.name}</h3>
              <span className='size '>{product.size}</span>
            </div>
          
            
            <div className=" flex items-center justify-between">
              <p>₹{product.price}</p>
              <button disabled={isAdding} onClick={(e)=>{addToCart(e, product)}} className={`${ isAdding ? 'changebtn': 'btn'} `}>ADD{isAdding ? 'ED': ''}</button>
              
              {/* disabled={isAdding} */}
            </div>
          </div>
   
    
          </>
  )
}

export default Product