// src/Header.js
 import React from 'react'; 
 import './index.css'; 
 //Optional, if you want to style the header
   const Header = () => { return ( 
   <header className="header"> 
   <h1>STC</h1> 
   <nav> <ul className="nav-links"> 
   <li><a href="#Deals">Deals</a></li> 
   <li><a href="#Devices">Devices</a></li> 
   <li><a href="#Mobile">Mobile</a></li>
   <li><a href="#Internet">Internet</a></li>
   <li><a href="#gaming">Gaming</a></li>
   <li><a href="#enterainment">Enterainment</a></li>
    </ul> 
   </nav> 
   </header> );
    } 
   
   export default Header;