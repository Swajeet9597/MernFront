import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import ProductPage from './pages/ProductPage'
import Order from './pages/Order'
import Address from './pages/Address'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/Home' element={<HomePage/>} />
        <Route path='/Signup' element={<SignupPage/>}/>
        <Route path='/Product' element={<ProductPage/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Address' element={<Address/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)

