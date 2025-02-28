import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Signup } from './Component/Signup';
import { Home } from './page/home';
import { ProductForm } from './Component/ProductForm';

import { Productcard } from './Component/Productcard';
import { Login } from './Component/Login';
import Navbar from './Component/Navbar';
import Cart from './page/Cart';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/Signup" element={<Signup />} ></Route>
        <Route path="/Cart" element={<Cart />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path='/productform' element={<ProductForm/>}/>
        <Route path ='/productCard' element={<Productcard/>}/>
      </Routes>
    </>
  );
}

export default App;
