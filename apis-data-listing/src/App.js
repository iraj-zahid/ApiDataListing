import logo from './logo.svg';
import './App.css'; 
import Home from "./View/Home"
import ProductDetail from './Components/Product/ProductDetail';
import ProductForm from './Components/Product/ProductForm';
import Signup from './Components/Auth/Signup';
import About from './View/About';
import Navbar from './Components/Navbar';
import Cart from './View/Cart';
import Contact from './View/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const mode = useSelector((state) => state.mode)
  if(mode == true){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")
  }
  return (
 <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
          <Route path="detailpage" element={<ProductDetail/>} />
          <Route path="form" element={<ProductForm/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="about" element={<About/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
 </>
    
  );
}

export default App;
