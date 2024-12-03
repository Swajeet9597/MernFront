import React, { useEffect,useState } from "react";
import "./OrderDetails.css";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {

    const[cartData,setCartData] = useState([])
    const navigate = useNavigate();

    function handleAdd(){
        navigate('/Address')
    }

    function hanldeClick(){
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
            const response = await fetch(`http://localhost:8000/api/product/cartAdd`,{
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
        <div className="OrderDetailsbox">
            <div className="orderl">
                <div className="itemss">

{cartData.map((cart)=>(
    <>
     <div className="orderItem">
                        <div className="orderIteml">
                            <img src="burger_fries_cold.jpg" alt="" />
                            <div className="orderItemlsub">
                                <span>{cart.title}</span>
                                <span>{cart.quantity}x item</span>
                            </div>
                        </div>
                        <div className="orderItemr">₹{cart.price}</div>
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
            <div className="orderr">


                <div className="addressInput">
                    <div onClick={handleAdd}  div className="addressInputl">
                        <div className="circle">
                            <img src="MapPin.png" alt="" />
                        </div>
                        <div className="inadd">
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
                    <div className="taxsub">
                        <span>Items</span>
                        <span>₹{totalSum}</span>
                    </div>
                    <div className="taxsub">
                        <span>Sales Tax</span>
                        <span>₹{saleTax}</span>
                    </div>
                </div>


                <img src="HLine1.png" alt="" />

                <div className="tax">
                    <div className="taxsub">
                        <span>Subtotal ({totalQuantity} items)</span>
                        <span>₹{totalSum+saleTax}</span>
                    </div>
                </div>

                <button onClick={hanldeClick} className="paymentM" >Choose Payment Method</button>

            </div>
        </div>
    );
};

export default OrderDetails;
