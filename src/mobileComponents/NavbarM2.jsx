import React, { useEffect, useState } from 'react';
import "./NavbarM2.css"
import cart from '../assets/cartlogo.png'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/helper';

const NavbarM2 = ({setSelectCartM}) => {

  const [userData, setuserData] = useState([])

        const navigate = useNavigate()

        
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
        


  function handleCart(){
    console.log("cartmm")
    setSelectCartM(true)
  }
  return (


    <>
    <div className='nav2mob' >
      <div onClick={handleBack} className="n2_1">
        <div className="mobnavimg">

         <img src="profile.png" alt="" />
        </div>
         <span>Hey {userData.name}</span>
      </div>
      <div onClick={handleCart} className="n2_2">
            <div  className="cartm">
                <img src={cart} alt="" />
            </div>
            <div className='carttext' >
                <span>My Cart</span>
            </div>
      </div>
    </div>
  
    </>
  );
}

export default NavbarM2;
