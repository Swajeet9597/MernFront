import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import './HomePage.css'
import NavBar2 from '../components/NavBar2';
import NavbarM1 from '../mobileComponents/NavbarM1';
import NavbarM2 from '../mobileComponents/NavbarM2';
import HomeSearchM from '../mobileComponents/HomeSearchM';
import loc from '../assets/Location.png'
import OffM from '../mobileComponents/OffM';
import Resto from '../components/Resto';
import RestoM from '../mobileComponents/RestoM';
import FoodCat from '../components/FoodCat';
import FoodCatM from '../mobileComponents/FoodCatM';
import RestoName from '../components/RestoName';
import RestoNameM from '../mobileComponents/RestoNameM';
import ContactUs from '../components/ContactUs';
import AboutM from '../mobileComponents/AboutM';
import RegisterInfo from '../components/RegisterInfo';
import RegisterInfoM from '../mobileComponents/RegisterInfoM';
import Footer from '../components/Footer';



const HomePage = () => {

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
    <div className='Homepage' >
        {screeSize.width > 768 ? ( 
          <>
        <div className="nav">
            <NavBar/>
        </div>
        <div className="nav2">
            <NavBar2/>
        </div>
        <div className="homepageIMG">
          <img src="homepagepic1.jpg" alt="" />
        </div>




        <div className="homeoOff">
          <div className="homeOffh1">
            <span>Up to -40% 🎊 Order.uk exclusive deals</span>
          </div>
          <div className="homeOffnav">
            <span>Vegan</span>
            <span>Sushi</span>
            <span className='pizza' >Pizza & Fast food</span>
            <span>others</span>
          </div>
        </div>


        <div className="resto">
            <Resto/>
        </div>
        
        <div className="catHeading">

        <div className="homeOffh1">
            <span>Order.uk Popular Categories 🤩</span>
        </div>

        <div className="category">
            <FoodCat/>  
        </div>  
        <div className="homeOffh1">
            <span>Popular Restaurants</span>
        </div>
        </div>

        <div className="restonames">
              <RestoName/>
        </div>
        

        <div className="homepageIMG1">
          <img src="HomeCouple.png" alt="" />
        </div>


        <div className="chef">
          <div className="chef1">
            <img src="chef1.png" alt="" />
          </div>
          <div className="chef2">
          <img src="chef2.png" alt="" />
          </div>
        </div>

        <div className="contactUs">
              <ContactUs/>
        </div>

        
        <div className="regInfo">
          <RegisterInfo/>
        </div>
 

        <div className="footerHome">
            <Footer/>
        </div>

          </>
        ) : (


          <>
          
          <div className="nav1mobile">
            <NavbarM1/>
          </div>
          
          <div className="nav2mobile">
            <NavbarM2/>
          </div>
          <div className="addM">
           <img src={loc } alt="" /> <span>Lution Street, N4G-00....</span>
          </div>

          <div className="homeMImg">
            <HomeSearchM/>
          </div>


          <div className="offM">
              <OffM/>
          </div>

          
        <div className="restoM">
            <RestoM/>
        </div>  

          
        <div className="homeOffh1MM">
            <span>Order.uk Popular Categories</span>
        </div>

        <div className="categoryM">
            <FoodCatM/>  
        </div>  

        <div className="homeOffh1MMM">
            <span>Popular Restaurants</span>
        </div>


        <div className="restonamesM">
              <RestoNameM/>
        </div>
        
        <div className="homepageIMG1M">
          <img src="HomePageCoupleM.png" alt="" />
        </div>



        <div className="chefM">
          <div className="chef1M">
            <img src="chef1.png" alt="" />
          </div>
          <div className="chef2M">
          <img src="chef2.png" alt="" />
          </div>
        </div>

        <div className="aboutM">
          <AboutM/>
        </div>


        <div className="regInfoM">
          <RegisterInfoM/>
        </div>


        <div className="footerHome">
            <Footer/>
        </div>



          </>
        )
        
      
      }
        
    </div>
  );
}

export default HomePage;
