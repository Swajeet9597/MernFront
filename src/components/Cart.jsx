import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";



const Cart = ({cartData,setCartData}) => {

  const navigate = useNavigate();

  function handleCheckout(){
    navigate("/Order")
  }


  function calculateTotal(cartData) {
    return cartData.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.price);
    }, 0);
  }

      const totalSum = calculateTotal(cartData);
// console.log(totalSum);

async function handleRemove(cart){

    let response = await fetch(`http://localhost:8000/api/product/cartAdd`,{
        method:"DELETE",
        headers:{
            'Content-Type': "application/json",
        },
        body: JSON.stringify(cart)
    })

    if (response.ok) {
        const updatedResponse = await fetch(`http://localhost:8000/api/product/cartAdd`, {
          method: "GET",
        });
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          console.log("rrerererer",updatedData.msg);
          setCartData(updatedData.msg);
        }
    }
    
}


  return (
    <div className="cartboxx">
      {/* Header Section */}
      <div className="copy">
        <img src="Frame96.png" alt="Brand Logo" />
      </div>

      {/* Basket Section */}
      <div className="cartbott">
        <div className="cartheading">
          <img src="FullShoppingBasket.png" alt="Basket Icon" />
          <span>My Basket</span>
        </div>

        {/* Cart Items */}

        {cartData.map((cart)=>(
                <>
                    <div className="foodcart">
          <div className="x1">{cart.quantity}x</div>
          <div className="fooddetailscart">
            <p>₹{cart.price}</p>
            <p>
              {cart.title} 
            </p>
          </div>
          <img onClick={()=>{handleRemove(cart)}} src="Remove.png" alt="Remove Item" />
        </div>

                </>
        ))}


        <div className="total">
          <div className="subtotal">
            <span>Sub Total: </span>
            <span>₹{totalSum}</span>
          </div>
          <div className="discount">
            <span>Discounts: </span>
            <span>-₹3.00</span>
          </div>
          <div className="free">
            <span>Delivery Fee: </span>
            <span>₹3.00</span>
          </div>
        </div>

        {/* Payment Section */}
        <div className="pay">
          <div className="payrs">
            <span>Total to pay</span>
            <span>₹{totalSum}</span>
          </div>
          <div className="choosefree">
            <p>Choose your free item..</p>
            <img src="Forwar Button.png" alt="Forward Button" />
          </div>
          <div className="choosefree">
            <p>Apply Coupon Code here</p>
            <img src="ForwButton.png" alt="Forward Button" />
          </div>
        </div>

        {/* Checkout Section */}
        <div className="checkout">
          <div className="motor">
            <div className="motorl">
              <img src="mmm.png" alt="Motor Icon Left" />
            </div>
            <img src="Line9.png" alt="Separator Line" />
            <div className="motorr">
              <img src="nnn.png" alt="Motor Icon Right" />
            </div>
          </div>
          <div className="checkoutbox">
            <div className="checkkkk">
              <img src="Forton.png" alt="Checkout Icon" />
            </div>
            <div onClick={handleCheckout} className="checkouttttt">
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
