import React from 'react';
import './NavBar2.css'
import logo from '../assets/LOGO.png'
import user from '../assets/User.png'
const NavBar2 = () => {
  return (
    <div className='Navbar2' >
        <div className="navbox1">
                <img className='navlogo' src={logo} />
        </div>
        <div className="navbox2">
                <span className='homespan' >Home</span>
                <span>Special Offers</span>
                <span>Restaurants</span>
                <span>Track Order</span>
        </div>
        <div className='profile' > 
        <div className='profile1' >

                <img src={user} alt="" className="user" />
                <span>hey Mike</span>
        </div>
        </div>
    </div>
  );
}

export default NavBar2;
