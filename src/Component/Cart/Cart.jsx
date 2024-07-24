import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext'
import { Helmet } from 'react-helmet';

export default function Cart() {
  let [cartDetails, setCartDetails, ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let { getLoggedUserCart, removeItemFromCart, updateProductCount,setnumOfCartItems } = useContext(CartContext);

  async function getCart() {
    let response = await getLoggedUserCart();
    if (response?.data?.status === 'success') {
      setIsLoading(true)
      setCartDetails(response.data.data);
      setIsLoading(false)
    }

  } 

  async function deleteItem(productId) {
    let response = await removeItemFromCart(productId);
      setCartDetails(response.data.data);
      setnumOfCartItems(response.data.numOfCartItems)
      toast.success('Product Successfully Removed');
   
    
  }

  async function updateCartQuantity(productId, count) {
    let response = await updateProductCount(productId, count);
    if (response.data.status === 'success') {
      setCartDetails(response.data.data);
      toast.success('Product count updated');
    }
     
  }

  useEffect(() => {
    getCart();
  }, []);
 
  if (isLoading == true) {
    return <div className=' d-flex justify-content-center align-items-center my-5 icon-container '><i class="fa-solid fa-spinner fa-spin fa-2xl "></i></div>; // Display a loading message while data is being fetched
  }
  return (
    <>
    <Helmet>
      <title>Cart</title>
    </Helmet>
    <div className="mx-4"> 
      <div className="row">
   
        <div>
          <div className="p-3 bg-light mt-5 mb-2">
          <h3>Shop Cart</h3>
          <h6 className='text-success'>Total Cart Price: {cartDetails.totalCartPrice}EGP</h6>
          {cartDetails && cartDetails.products && cartDetails.products.map((product) => (
        <div key={product.product.id} className='row border-bottom py-2 align-items-center '>
          <div className="col-md-1">
            <img src={product.product.imageCover} className='w-100' alt={product.product.title} />
          </div>
          <div className="col-md-11 d-flex justify-content-between">
            <div>
              <h6>{product.product.title}</h6>
              <h6 className='text-success'>Price: {product.price}</h6>
              <button className='btn m-0 p-0' onClick={() => deleteItem(product.product._id)}>
              <i className='fa-regular text-success fa-trash-can'></i> Remove
            </button>
            </div>
            
            <div>
              <button onClick={() => updateCartQuantity(product.product._id, product.count + 1)} className='btn btn-outline-success btn-sm'>+</button>
              <span className='mx-2'>{product.count}</span>
              <button onClick={() => updateCartQuantity(product.product._id, product.count - 1)} className='btn btn-outline-success btn-sm'>-</button>
            </div>
          </div>
          
        </div>
    
        
      ))}

        </div>
         
        </div>
        
        
      
      
           <button className='btn  btn-success w-100 mb-3'>
        <Link className='text-white text-decoration-none ' to={'/CheckOut'}>
          CheckOut
        </Link>
      </button>
      </div>
      </div>
    
    </>
  );
}
