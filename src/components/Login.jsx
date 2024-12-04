import React, { useState } from 'react';
import './Login.css'
import LOGO from '../assets/LOGO.png'
import line from '../assets/Line.png'
import google from '../assets/Google.png'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/helper';
const Login = () => {
  const navigate = useNavigate();
  async function handleOnClick (e) {

    e.preventDefault()
    // navigate("/Home")

    try {
      console.log(entereInfo)
    let response = await fetch(`${BASE_URL}/api/auth/login`,{
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(entereInfo)
    })
    console.log(response)

    if(response.ok){
       navigate("/Home")
       localStorage.setItem("email",entereInfo.email)

    }
    } catch (error) {
      console.log(error)
    }
    
    
  }

  function handleSignupPage () {
    navigate("/Signup")
  }

  const [entereInfo, setEnteredInfo] = useState({
    email: "",
    password: ""
  })

  function handleInput(e){

    let name = e.target.name;
    let value  = e.target.value;

    setEnteredInfo({
      ...entereInfo,
      [name]:value
    })
  }




  return (
    <div className='loginbox' >
      <div className="img">
      <img className='logoinbox' src={LOGO} />
      </div>
   
      <div className='textinbox' >Welcome Back  👋</div>
      <span>Today is a new day. It's your day. You shape it. <br />
Sign in to start ordering.</span>
      <form action="" onSubmit={handleOnClick} >
        <div className="form">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' onChange={handleInput} id='email' placeholder='Example@email.com' required/>

          <label className='pass' htmlFor="password">Password</label>
          <input type="password" name='password' onChange={handleInput} id='password' placeholder='At least 8 characters' required/>
        </div>
        <div className="forgot">

        <p>Forgot Password?</p>
        </div>

        <button type="submit">Sign in</button>
       
      </form>

      <div className="line">
        <img className='lineimg' src={line} alt="" />
         <span className='or' >Or</span>
        <img className='lineimg' src={line} alt="" />
         
      </div>

      <div className="google">
        <img src={google} />
        <span>Sign in with Google</span>
      </div>

      <div className="signuptext">
      Don't you have an account? &nbsp; <span onClick={handleSignupPage} >Sign up</span> 
      </div>
    </div>
  );
}

export default Login;
