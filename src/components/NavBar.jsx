import React from 'react';
import './NavBar.css'
import loc from '../assets/Location.png'
import cartlogo from '../assets/cartlogo.png'
import cartarrow from '../assets/cartarrow.png'
const NavBar = ({setSelectCart}) => {

  function handleCart(){
    setSelectCart(true)
  }
  return (
    <div className='navBar' >
      <div className="navleft">
        <span className='off' >🌟 &nbsp;  Get 5% Off your first order,&nbsp;<span className='promo' >Promo: ORDER5</span> </span>
      </div>
      <div className="navright">
        <span className='add' > <img src={loc} alt="" /> &nbsp; &nbsp; <h5> Regent Street, A4, A4201, London </h5> <span className='cloc' >Change Location</span> </span>
        <div className="cartbox">
            <div onClick={handleCart} className="cart1">
                  <div className="imgcart">

                 <img src={cartlogo} alt="" className="cartlogo" /> 
                  </div>
                 <span>My Cart</span>
            </div>
            <div className="cart2">

            </div>
            <div className="cart3">
                  <img src={cartarrow} alt="" className="cartarrow" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
