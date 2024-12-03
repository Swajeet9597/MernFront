import React,{useState,useEffect} from 'react';
import './Address.css'
import NavBar from '../components/NavBar';

import { useNavigate } from 'react-router-dom';
import NavBarOrder from '../components/NavBarOrder';
import NavbarM1 from '../mobileComponents/NavbarM1';
import OrderDetailsM from '../mobileComponents/OrderDetailsM';
import Footer from '../components/Footer';
import AddressC from '../components/AddressC';
import AddAdress from '../components/AddAdress';


const Address = () => {

    const navigate = useNavigate()
    const [select,setSelect] = useState(true)
    const[render,setRender] = useState(true)
    // const [select,setSelect] = useState(false)

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
 <span>Your Addresses</span>
</div>

<div className="addresses">
    <AddressC setSelect={setSelect} render={render} setRender={setRender}/>
</div>


<div className="footerHomeOA">
 <Footer/>
</div>

{select ? null : <AddAdress setSelect={setSelect}  render={render} setRender={setRender}/>}






</> : <>

<div className="nav1mobile">
 <NavbarM1/>
</div>


<div className="checkoutMM">
<img onClick={handleArrow} src="Isscon.png" alt="" />
<span>Your Addresses</span>
</div>


<div className="addressesM">
    <AddressC setSelect={setSelect} render={render} setRender={setRender}/>
</div>

{select ? null : <AddAdress setSelect={setSelect}  render={render} setRender={setRender}/>}


</>}

   </>
  );
}

export default Address;
