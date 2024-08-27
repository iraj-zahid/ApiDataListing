import logo from './logo.svg';
import './App.css'; 
import Home from "./Components/Home/Home"
import Detail from './Components/Detail/Detail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
 <>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/detailpage" element={<Detail/>} />
      </Routes>
 </>
    
  );
}

export default App;
