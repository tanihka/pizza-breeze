import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  let total = 0;
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const [priceFetched, togglePriceFetched] = useState(false);

  useEffect(() => {
    if (!cart.items) {
      return;
    }

    if (priceFetched) {
      return;
    }

    fetch('https://ecom-rest-apis.herokuapp.com/api/products/cart-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) })
    }).then(res => res.json())
      .then(products => {
        setProducts(products);
        togglePriceFetched(true);
      })
  }, [cart, priceFetched]);

  const getQty = (productId) => {
    return cart.items[productId];
  }

  const increment = (productId) => {
    const existingQty = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }

  const decrement = (productId) => {
    const existingQty = cart.items[productId];
    if (existingQty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  }

  const getSum = (productId, price) => {
    const sum = price * getQty(productId);
    total += sum;
    return sum;
  }

  const handleDelete = (productId) => {
    const _cart = { ...cart };
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    const updatedProductsList = products.filter((product) => product._id !== productId);
    setProducts(updatedProductsList);
  }

  const handleOrderNow = () => {
    window.alert('Order placed succesfully!');
    setProducts([]);
    setCart({});
  }

  return (
    !products.length
      ? <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" alt="" />
      :
      <div>

        <ul className='mobileui'>
          <h1 className=" font-bold">Cart items</h1>
          {
            products.map(product => {
              return (
                <li className="mb-12 mt-5" key={product._id}>
                  <div className="flex items-center ">
                    <div className=" img">
                      <img src={product.image} alt="" />
                    </div>
                    <div className='pl-8' >
                      <div className='flex flex-col	'>
                        <h1 className="font-bold">{product.name}</h1>
                        
                        <span>₹ {getSum(product._id, product.price)}</span>
                      </div>
                      <div className="flex items-center justify-between ">
                        <div className="flex items-center justify-between">
                          <button onClick={() => { decrement(product._id) }} className="quantity"><i class="fa-solid fa-minus"></i></button>
                          <b className="px-3">{getQty(product._id)}</b>
                          <button onClick={() => { increment(product._id) }} className="quantity"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <div className='ml-10 mt-3'>
                        <button onClick={() => { handleDelete(product._id) }} className="quantity delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                      </div>
                    </div>


                  </div>
                  {/*  */}
                  {/* <div>

                    </div> */}



                </li>
              )
            })
          }
        </ul>
        <div className='bottom'>
          <hr className="mb-6" />
          <div className="flex items-center justify-between">
            <b>Grand Total:</b>
            <p className=''> ₹ {total}</p>
          </div>
          <div className=" text-center mt-6">
            <button onClick={handleOrderNow} className="orderbtn">Checkout (₹ {total})</button>
          </div>
        </div>
      </div>
  )
}

export default Cart;
