import { useState } from 'react'
import './SignupPage.css'
import Login from '../components/Login'
import homepage from '../assets/homepage.png'
import Footer from '../components/Footer'
import Signup from '../components/Signup'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="left">
                <Signup/>
          </div>
          <div className="right">
            <img className='homepage' src={homepage} />
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
