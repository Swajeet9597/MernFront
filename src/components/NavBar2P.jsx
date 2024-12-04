import React, { useEffect, useState } from 'react';
import './NavBar2P.css'
import logo from '../assets/LOGO.png'
import user from '../assets/User.png'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/helper';
const NavBar2P = () => {
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

    
        const emailInfo = {
            "email": localStorage.getItem("email")
        }
    
        async function getUserData () {
          const response = await fetch(`${BASE_URL}/api/auth/user`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(emailInfo)
          })
    
          if(response.ok){
            let data = await response.json()
    
            setuserData(data.msg)
          }
        }
        useEffect(()=>{
                getUserData()
              },[])    
        
  return (
    <div className='Navbar2' >
    <div className="navbox1">
            <img className='navlogo' src={logo} />
    </div>
    <div className="navbox2">
            <span onClick={handleHomePage}   >Home</span>
            <span>Special Offers</span>
            <span handleProductPage className='homespanP' >Restaurants</span>
            <span>Track Order</span>
    </div>
    <div className='profile' > 
    <div onClick={handleBack}  className='profile1' >

            <img src={user} alt="" className="user" />
            <span>hey {userData.name}</span>
    </div>
    </div>
</div>
  );
}

export default NavBar2P;
