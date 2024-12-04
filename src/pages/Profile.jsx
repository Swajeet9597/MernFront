
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import NavBarOrder from '../components/NavBarOrder';
import Footer from '../components/Footer';
import PaymentC from '../components/PaymentC';
import NavbarM1 from '../mobileComponents/NavbarM1';


const Profile = () => {

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










<div className="footerHomeOPPP">
 <Footer/>
</div>



</> : <>

<div className="nav1mobile">
 <NavbarM1/>
</div>





</>}
  </>
  );
}

export default Profile;
