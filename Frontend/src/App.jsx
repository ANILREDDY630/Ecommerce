import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'
import Navbar from './Component/Navbar'
import Singlecard from './Component/Singlecard'
import Productform from './Component/productform'
import Cart from './page/Cart'
import SelectAddress from './page/SelectAddress'
import OrderConfirmation from './page/Oderconfirmation'
import PrivateRouter from './Router/PrivateRouter'


function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/cart'  element={<Cart/>}/>
        <Route path="/productform" element={
          <PrivateRouter>
          <Productform />
          </PrivateRouter>} />
       <Route path='/product/:id' element={<Singlecard/>}/>
       <Route path='/selectaddress' element={<SelectAddress/>}/>  
       <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
       <Route path='*' element={<h1>Not Found</h1>}/> 
      </Routes>
    </>
  )
}

export default App