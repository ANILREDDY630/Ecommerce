import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Signup } from './Component/Signup'
import { Home } from './page/Home'
import { Productform } from './Component/productform'
import { Productcardseller } from './Component/productcardforseller'
// import {Navbar} from './Component/Navbar'
import Navbar from './Component/Navbar'


function App() {
  return (
<Router>
<Navbar/>
<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    <Route path="/productform" element={<Productform />} />
    <Route path='/my-product' element={<Productcardseller/>}/>

    </Routes>
</Router>

    
    
  )
}

export default App
