// src/Header.js
 import React from 'react'; 
 import './index.css'; 
 import {FaSearch,FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

 //Optional, if you want to style the header
   const Header = () => { return ( 
   <header className="header"> 
   <nav> 
    <h2 className='lego'>STC</h2>
    <ul className="nav-links"> 
 
   <li><a href="#Deals">Deals</a></li> 
   <li><a href="#Devices">Devices</a></li> 
   <li><a href="#Mobile">Mobile</a></li>
   <li><a href="#Internet">Internet</a></li>
   <li><a href="#gaming">Gaming</a></li>
   <li><a href="#enterainment">Enterainment</a></li>
    </ul> 
   </nav> 

      <nav>
      <ul className="nav-links"> 
      <li> <a> <FaSearch size="16" color="grey" /> </a></li>
      <li> <a><FaShoppingCart size="16" color="grey" /></a></li>
      <li  className='loginBtn'><a>Login</a></li>
      <li className='logout'><a><FaSignOutAlt size="16" color="pink"/></a></li>
          </ul>
      </nav>

   </header> );
    } 
   
   export default Header;