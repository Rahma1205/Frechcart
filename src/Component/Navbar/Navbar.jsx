import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../Assets/Images/images (2).png'
import { Link } from 'react-router-dom'


export default function Navbar({ userData, Logout }) {

  return (
    <> 
        <nav className="navbar navbar-expand-lg bg-light border border-success-subtle m-3 rounded-4 fixed-top">
        <div className="container-fluid">
          <div className='d-flex'>
            <Link className="navbar-brand" to="/Home">
              <img src={logo} className='w-25' alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
          </div>

          <div className="offcanvas offcanvas-top border border-success rounded-bottom-4 " data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-success" id="offcanvasNavbarLabel">Frech Cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              {userData !== null ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Product">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Categories">Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="allorders">Orders</Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className='m-2'>
                    <a href="https://www.facebook.com/profile.php?id=100005932775142" target="_blank" rel="noopener noreferrer">
                      <i className='text-black fas fa-brands fa-facebook'></i>
                    </a>
                  </li>
                  <li className='m-2'>
                    <a href="https://www.linkedin.com/in/rahma-osama-279a4531a/" target="_blank" rel="noopener noreferrer">
                      <i className='fa-brands fa-linkedin text-black'></i>
                    </a>
                  </li>
                  <li className='m-2'>
                    <a href="https://www.instagram.com/rahmaosamaa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <i className='fas fa-brands fa-instagram text-black'></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Login</Link>
                  </li>
                </ul>
              )}
              {userData !== null && (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className='m-2'>
                    <a href="https://www.facebook.com/profile.php?id=100005932775142" target="_blank" rel="noopener noreferrer">
                      <i className='text-black fas fa-brands fa-facebook'></i>
                    </a>
                  </li>
                  <li className='m-2'>
                    <a href="https://www.linkedin.com/in/rahma-osama-279a4531a/" target="_blank" rel="noopener noreferrer">
                      <i className='fa-brands fa-linkedin text-black'></i>
                    </a>
                  </li>
                  <li className='m-2'>
                    <a href="https://www.instagram.com/rahmaosamaa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <i className='fas fa-brands fa-instagram text-black'></i>
                    </a>
                  </li>
                  <li className="nav-item curser-pointer">
                    <span className="nav-link" onClick={Logout}>Logout</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
     



    </>
  )
}
