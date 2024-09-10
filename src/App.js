import logo from './logo.svg';
import './App.css'; 
import Home from "./View/Home"
import ProductDetail from './Components/Product/ProductDetail';
import Signup from './View/Signup';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Cart from './View/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
 <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
          <Route path="detailpage" element={<ProductDetail/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="about" element={<About/>} />
          <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
 </>
    
  );
}

export default App;
