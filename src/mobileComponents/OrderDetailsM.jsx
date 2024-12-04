import React, { useEffect,useState } from "react";
import './OrderDetailsM.css'
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../services/helper'

const OrderDetailsM = () => {

    const[cartData,setCartData] = useState([])
    const navigate = useNavigate();

    function handleAdd(){
        navigate('/Address')
    }

    function handleNavi(){
        navigate('/Payment')
    }

    const saleTax = 10;


    function calculateTotal(cartData) {
        return cartData.reduce((total, item) => {
          return total + item.quantity * parseFloat(item.price);
        }, 0);
      }
    
          const totalSum = calculateTotal(cartData);


          function calculateTotalQuantity(cartData) {
            return cartData.reduce((total, item) => total + item.quantity, 0);
          }
          
          const totalQuantity = calculateTotalQuantity(cartData);
    
 










    const getCartData = async() =>{
        try {
            const response = await fetch(`${BASE_URL}/api/product/cartAdd`,{
                method:"GET"
            })
            if(response.ok){
                let data = await response.json()
                setCartData(data.msg)
            }


    } catch (error) {
        console.log(error);
    }
        
    }


useEffect(()=>{
    getCartData()
   },[])


  return (
    <div className="OrderDetailsboxM">
            <div className="orderlM">
                <div className="itemssM">

{cartData.map((cart)=>(
    <>
                    <div className="orderItemM">
                        <div className="orderItemlM">
                            <img src="burger_fries_cold.jpg" alt="" />
                            <div className="orderItemlsubM">
                                <div>{cart.title}</div>
                                <span>{cart.quantity}x item</span>
                            </div>
                        </div>
                        <div className="orderItemrM">₹{cart.price}</div>
                    </div>
                    <img src="HLine1.png" alt="" />
    
    </>
))}

                   



                    {/* <div className="orderItem">
                        <div className="orderIteml">
                            <img src="burger_fries_cold.jpg" alt="" />
                            <div className="orderItemlsub">
                                <span>Royal Cheese Burger</span>
                                <span>1x item</span>
                            </div>
                        </div>
                        <div className="orderItemr">₹120</div>
                    </div>
                    <img src="HLine1.png" alt="" />


                    <div className="orderItem">
                        <div className="orderIteml">
                            <img src="burger_fries_cold.jpg" alt="" />
                            <div className="orderItemlsub">
                                <span>Royal Cheese Burger</span>
                                <span>1x item</span>
                            </div>
                        </div>
                        <div className="orderItemr">₹120</div>
                    </div>
                    <img src="HLine1.png" alt="" /> */}



                    
                </div>



                <div className="orderNotes">
                    <span>Notes</span>
                    <input type="text" placeholder="Add order notes" />
                </div>
            </div>


<div className="deliveryADd">
Delivery Address
</div>
 
            <div className="orderrM">

                <div className="addressInput">
                    <div onClick={handleAdd}  div className="addressInputl">
                        <div className="circle">
                            <img src="MapPin.png" alt="" />
                        </div>
                        <div className="inaddM">
                        <span>Delivery Address</span>
                           <span>45, Green Street, Sector 12...</span>
                        </div>
                    </div>
                    <div className="addressInputr">
                          <img src="Aight.png" alt="" />
                    </div>
                </div>

                <img src="HLine1.png" alt="" />

                <div className="tax">
                    <div className="taxsubM">
                        <span>Items</span>
                        <span>₹{totalSum}</span>
                    </div>
                    <div className="taxsubM">
                        <span>Sales Tax</span>
                        <span>₹{saleTax}</span>
                    </div>
                </div>


                <img src="HLine1.png" alt="" />

                <div className="tax">
                    <div className="taxsubM">
                        <span>Subtotal ({totalQuantity} items)</span>
                        <span>₹{totalSum+saleTax}</span>
                    </div>
                </div>

                <button onClick={handleNavi} className="paymentM" >Choose Payment Method</button>

            </div>
        </div>
  );
}

export default OrderDetailsM;
