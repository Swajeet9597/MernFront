
import './PaymentSuccess.css'
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import NavBarOrder from '../components/NavBarOrder';
import Footer from '../components/Footer';
import PaymentC from '../components/PaymentC';
import NavbarM1 from '../mobileComponents/NavbarM1';


const PaymentSuccess = () => {
    const navigate = useNavigate()
 
    function handleHome(){
        navigate('/Home')
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




<div className="payyyy">
    <img src="Content.png" alt="" />
    <div className="rrf">
        <span>Royal Cheese Burger</span>
        <span>Potato Veggies</span>
        <span>Coke Coca Cola</span>
        <button onClick={handleHome} >Back to Home</button>
    </div>
</div>





<div className="footerHomeOPPP">
 <Footer/>
</div>



</> : <>

<div className="nav1mobile">
 <NavbarM1/>
</div>

<div className="payyyy">
    <img src="Content.png" alt="" />
    <div className="rrf">
        <span>Royal Cheese Burger</span>
        <span>Potato Veggies</span>
        <span>Coke Coca Cola</span>
        <button onClick={handleHome} >Back to Home</button>
    </div>
</div>



</>}
  </>
  );
}

export default PaymentSuccess;
