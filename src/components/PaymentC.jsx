import React from 'react';
import './PaymentC.css'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { BASE_URL } from '../services/helper';

const PaymentC = () => {
    const[cartData,setCartData] = useState([])

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

    const navigate = useNavigate()
    function handleNav(){
        navigate("/PaymentSuccess")
    }
  return (
    <>
    <div className="paymentbox">
        <div className="paymentl">

             <div className="payt">
                <div className="payttt">
                 <img src="Icon.png" alt="" />
                 <div className="paytt">
                    <span>Wallet</span>
                    <span>Available balance: ₹300</span>
                 </div>
                </div>
                <div className="payttr">
                    <img src="Vector.png" alt="" />
                </div>
             </div>

        
                <img src="Line14.png" alt="" />
             

                <div className="paytd">
                <div className="paytttt">
                 <img src="SocialIcon1.png" alt="" />
                 <div className="paytt">
                    <span>MaestroKard</span>
                    {/* <span>MaestroKard</span> */}
                 </div>
                </div>
                <div className="payttr">
                    <img src="Radio.png" alt="" />
                </div>
             </div>



             <div className="paytd">
                <div className="paytttt">
                 <img src="SocialIcon.png" alt="" />
                 <div className="paytt">
                    <span>Paypal</span>
                    {/* <span>MaestroKard</span> */}
                 </div>
                </div>
                <div className="payttr">
                    <img src="Radio.png" alt="" />
                </div>
             </div>


             
             <div className="paytd">
                <div className="paytttt">
                 <img src="SocialIcon2.png" alt="" />
                 <div className="paytt">
                    <span>Stripe</span>
                    {/* <span>MaestroKard</span> */}
                 </div>
                </div>
                <div className="payttr">
                    <img src="Radio.png" alt="" />
                </div>
             </div>

             
             <div className="paytd">
                <div className="paytttt">
                 <img src="Add.png" alt="" />
                 <div className="paytt">
                    <span>Add Debit Card</span>
                    {/* <span>MaestroKard</span> */}
                 </div>
                </div>
                <div className="payttr">
                    <img src="Radio.png" alt="" />
                </div>
             </div>





        </div>
        <div className="paymentr">
        <img className='liiii' src="Line14.png" alt="" />
              <div className="hhhj">
                <span>Amount to be payed</span>
                <span>₹{totalSum}</span>
              </div>
        <img src="Line14.png" alt="" />

        <button onClick={handleNav} >Proceed Payment</button>
        </div>
    </div>
    </>
  );
}

export default PaymentC;
