import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'
import { Productform } from './Component/productform'
import { Productcardseller } from './Component/productcardforseller'


function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    <Route path="/productform" element={<Productform />} />
    <Route path='/my-product' element={<Productcardseller/>}/>

    </Routes>
    </>
    
  )
}

export default App
