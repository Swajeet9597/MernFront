import React, { useContext,useEffect, useState } from 'react';
import './NavBar2.css'
import logo from '../assets/LOGO.png'
import user from '../assets/User.png'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/helper';
import { Usercontext } from '../context/context';


const NavBar2 = () => {

        const {fetchCurrentUserDetails} = useContext(Usercontext)

        const getCurrentUserDetails = async(req,res)=>{
                const cdata = await fetchCurrentUserDetails();
                console.log("Cccccdata",cdata);
                setuserData(cdata)
        }

        const [userData, setuserData] = useState([])

        const navigate = useNavigate()

        function handleHomePage(){
                navigate('/Home')
        }

        function handleProductPage(){
                navigate('/Product')
        }
        const handleBack=()=>{
                navigate('/Profile')
        }


        useEffect(()=>{
                getCurrentUserDetails()
              },[])    
        
  return (
    <div className='Navbar2' >
        <div className="navbox1">
                <img className='navlogo' src={logo} />
        </div>
        <div className="navbox2">
                <span onClick={handleHomePage} className='homespan' >Home</span>
                <span>Special Offers</span>
                <span  onClick={handleProductPage} >Restaurants</span>
                <span>Track Order</span>
        </div>
        <div className='profile' > 
        <div onClick={handleBack} className='profile1' >

                <img src={user} alt="" className="user" />
                <span>hey {userData.email}</span>
        </div>
        </div>
    </div>
  );
}

export default NavBar2;
