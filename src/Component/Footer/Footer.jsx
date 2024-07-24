import React, { useContext, useEffect, useState } from 'react'
import styles from './Footer.module.css';
import { CartContext } from '../../Context/CartContext';
import { Link} from 'react-router-dom';


export function ani() {
  const cartElement = document.getElementById('Cart');
  cartElement.classList.add('bounce-animation');

  // Remove the class after the animation completes
  setTimeout(() => {
    cartElement.classList.remove('bounce-animation');
  }, 1000); // Adjust the timeout to match the duration of your animation
}


export default function Footer() {
  let { numOfCartItems } = useContext(CartContext);
  const location = window.location.hash ; 



 

  return (
    <>
      {location!=='#/Cart' && location!=='#/'&&location!=='#/RestPassword'&&location!=='#/ForgetPassword'&&location!=='#/Register'&&location!=='#/NewPassword'&& numOfCartItems!==0? (
        <div className='footer bg-dark text-white text-center py-2 position-fixed bottom-0 start-0 w-100'>
          <li className="nav-item position-relative me-2"  id='Cart'>
            <Link className="nav-link bounce-animation" to="Cart">
              <i className='fas fa-regular fa-shopping-cart fa-lg'></i>
              <span className='badge bg-success text-white'>{numOfCartItems}</span>
            </Link>
          </li>
        </div>
      ) : null}
    </>
  )
}