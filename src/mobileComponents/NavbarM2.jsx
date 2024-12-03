import React from 'react';
import "./NavbarM2.css"
import cart from '../assets/cartlogo.png'

const NavbarM2 = ({setSelectCartM}) => {


  function handleCart(){
    console.log("cartmm")
    setSelectCartM(true)
  }
  return (


    <>
    <div className='nav2mob' >
      <div className="n2_1">
        <div className="mobnavimg">

         <img src="profile.png" alt="" />
        </div>
         <span>Hey Mike</span>
      </div>
      <div onClick={handleCart} className="n2_2">
            <div  className="cartm">
                <img src={cart} alt="" />
            </div>
            <div className='carttext' >
                <span>My Cart</span>
            </div>
      </div>
    </div>
  
    </>
  );
}

export default NavbarM2;
