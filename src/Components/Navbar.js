import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const state = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const goToCart = () => {
    if(state.length > 0){
      navigate("cart")
    }
    else{
      navigate("/")
    }
  }
  
  
  return (
    <>
      <nav>
        <div className="w-full pl-[3%] flex items-center gap-[5%] border-gray-300 border-b-2 justify-between">
          <p className="m-[2%] IBM text-3xl font-semibold flex justify-center items-center">SMRT</p>
          <ul className="m-[2%] w-[100%] max-[435px]:text-2xl pr-[3%] flex items-center max-[1000px]:justify-end justify-center gap-[7%] text-3xl Moderustic">
            <li>
              <Link className="IBM flex justify-center items-center text-2xl" to="/">Home</Link>
            </li>
            <li>
              <Link className="IBM flex justify-center items-center text-2xl" to="/signup">Signup&nbsp;Now</Link>
            </li>
            <li>
              <Link className="IBM flex justify-center items-center text-2xl" to="/about">About</Link>
            </li>
            <li>
            <div onClick={goToCart} className="cursor-pointer w-full p-[1%] relative">
            <BsCart4 className="cursor-pointer w-full text-4xl" />
            <p className=" w-[50%] absolute top-0 left-5 p-[3%] bg-[#ffd000] rounded-full text-base text-center IBM ">{state.length}</p>
            </div>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  )
}
export default Navbar;