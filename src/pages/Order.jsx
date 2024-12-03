import React, {useState, useEffect} from 'react';
import './Order.css'
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2';
import RestoName from '../components/RestoName';
import Footer from '../components/Footer';
import OrderDetails from '../components/OrderDetails';
import { useNavigate } from 'react-router-dom';
import NavBarOrder from '../components/NavBarOrder';
import NavbarM1 from '../mobileComponents/NavbarM1';
import OrderDetailsM from '../mobileComponents/OrderDetailsM';

const Order = () => {

    const navigate = useNavigate()

    function handleArrow(){
        navigate('/Product')
    }

    const getScreen = () =>{
        return{
          width:window.innerWidth,
        };
      };

      const [screeSize, setScreenSize] = useState(getScreen());

      useEffect(()=>{
        const Screen = () =>{
            setScreenSize(getScreen());
        };
        window.addEventListener('resize', Screen);
    
      },[]);


  return (
      <>
      {screeSize.width > 768 ? <>

           <div className="nav">
            <NavBar/>
        </div>
        <div className="nav2">
            <NavBarOrder/>
        </div>


        <div className="orderDetailsspan">
            <img onClick={handleArrow} src="arrow-left.png" alt="" />
            <span>Your Order Details</span>
        </div>

        <div className="orderdetails">
             <OrderDetails/>
        </div>




        <div className="homeOffh1POO">
            <span>Similar Restaurants</span>
        </div>


        <div className="restonamesPO">
              <RestoName/>
        </div>

        <div className="footerHomeO">
            <Footer/>
        </div>



      </> : <>

      <div className="nav1mobile">
            <NavbarM1/>
          </div>
      
      
      <div className="checkoutMM">
        <img onClick={handleArrow} src="Isscon.png" alt="" />
        <span>Checkout</span>
      </div>

      <div className="orderdetailsM">
             <OrderDetailsM/>
        </div>
      
      
      
      </>}
    </>
  );
}

export default Order;
