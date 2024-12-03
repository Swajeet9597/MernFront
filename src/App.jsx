import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import homepage from './assets/homepage.png'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="left">
                <Login />
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
