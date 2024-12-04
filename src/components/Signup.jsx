import React from 'react';
import { useState } from 'react';
import './Login.css'
// import './Signup.css'
import LOGO from '../assets/LOGO.png'
import line from '../assets/Line.png'
import google from '../assets/Google.png'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from '../services/helper'
const Signup = () => {
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting user data:", user);
  
    try {
      const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response)

      if(response.ok){
        navigate("/")
      }
  
  
    } catch (error) {
      console.error("Error in fetch:", error);
    }
  };
  


function handleSingInpage (){
  navigate("/")
}










  const [user, setUser] = useState({
      name : "",
      number: "",
      email: "",
      password: ""
  })
  
  function handleOnChange (e){
 
      let name = e.target.name;
      let value = e.target.value;

        // console.log("name", name)
        // console.log("value", value)

      // setUserInfo({
      //   ...userInfo,
      //   [name]:value
      // });

      setUser({
        ...user,
          [name]:value
      })

  }

  return (
    <div className='loginbox' >
      <div className="img">
      <img className='logoinbox logoinbox2' src={LOGO} />
      </div>
   
      <div className='textinbox textinbox2' >Welcome Back  👋</div>
      <span>Today is a new day. It's your day. You shape it. <br />
Sign in to start ordering.</span>
      <form method='POST' onSubmit={handleOnSubmit} >
        <div className="form form2 ">
          <label className='signlab' htmlFor="name">Name</label>
          <input onChange={handleOnChange} className='in' name='name' type="text" id='name' value={user.name} placeholder='eg. John A' required/>

          <label className='number signlab' htmlFor="password">Phone</label>
          <input onChange={handleOnChange} className='in' type="number" name='number' value={user.number}  id='number' placeholder='Enter 10 digit phone number' required />

          
          <label className='signlab' htmlFor="email">Email</label>
          <input onChange={handleOnChange} className='in' type="email" name='email' value={user.email}  id='email' placeholder='Example@email.com' required/>

          
          <label className='pass signlab' htmlFor="password">Password</label>
          <input onChange={handleOnChange} className='in' type="password" id='password' value={user.password}  name='password' placeholder='At least 8 characters' required/>
        </div>
        {/* <div className="forgot">

        <p>Forgot Password?</p>
        </div> */}

        <button type="submit">Continue</button>
       
      </form>
{/* 
      <div className="line">
        <img className='lineimg' src={line} alt="" />
         <span className='or' >Or</span>
        <img className='lineimg' src={line} alt="" />
         
      </div> */}

      {/* <div className="google">
        <img src={google} />
        <span>Sign in with Google</span>
      </div> */}

      <div className="signuptext">
      Already have an account? &nbsp; <span onClick={handleSingInpage} >Sign in </span> 
      </div>
    </div>
  );
}

export default Signup;
