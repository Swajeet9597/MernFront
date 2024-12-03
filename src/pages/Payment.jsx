import { useNavigate } from 'react-router-dom';
import './Payment.css'
import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import NavBarOrder from '../components/NavBarOrder';
import Footer from '../components/Footer';
import PaymentC from '../components/PaymentC';
import NavbarM1 from '../mobileComponents/NavbarM1';

const Payment = () => {

    


    const navigate = useNavigate()

    function handleArrow(){
        navigate('/Order')
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
 <span>Choose and Pay</span>
</div>



<div className="paymentCompo">
    <PaymentC/>
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
<span>Choose and Pay</span>
</div>


<div className="paymentCompo">
    <PaymentC/>
</div>



</>}
    </>
  );
}

export default Payment;
