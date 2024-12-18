import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import homepage from './assets/homepage.png'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    
      <div className="main">
      <ToastContainer />
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
