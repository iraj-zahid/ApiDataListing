import logo from './logo.svg';
import './App.css'; 
import Home from "./Components/Home/Home"
import Detail from './Components/Detail/Detail';
import Signup from './Components/Signup/Signup';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
 <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>} />
          <Route path="detailpage" element={<Detail/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="about" element={<About/>} />
        </Route>
      </Routes>
 </>
    
  );
}

export default App;
