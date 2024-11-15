import logo from './logo.svg';
import './App.css'; 
import Home from "./View/Home"
import ProductDetail from './Components/Product/ProductDetail';
import ProductForm from './Components/Product/ProductForm';
import EditProductForm from './Components/Product/EditProductForm';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import About from './View/About';
import Navbar from './Components/Navbar';
import Cart from './View/Cart';
import Contact from './View/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { isLogin } from "./store/slices/isLoginSlice";



function App() {
  const mode = useSelector((state) => state.mode)
  const cartData = useSelector((state) => state.cart)
  const isUserLogin = useSelector((state) => state.isLogin)
  const loginUserData = useSelector((data) => data.loginData)
  const filterCart = loginUserData && cartData && cartData.filter((items) => items.email === loginUserData.email)

  if(mode == true){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")
  }
  const ProtectedRoute = (component) => {
    if(isUserLogin){
      return component
    }else{
      return <Login/>
    }
  }
  const ProtectedRouteCart = (component) => {
    if(isUserLogin){
      if(filterCart.length > 0){
        return component
      }else{
        return <Home/>
      }
    }else{
      return <Login/>
    }
  }
  return (
 <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
          <Route path="detailpage" element={<ProductDetail/>} />
          <Route path="form" element={ProtectedRoute(<ProductForm/>)} />
          <Route path="editform" element={ProtectedRoute(<EditProductForm/>)} />
          <Route path="signup" element={<Signup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="about" element={<About/>} />
          <Route path="cart" element={ProtectedRouteCart(<Cart/>)} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
 </>
    
  );
}

export default App;
