import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BsCart4 } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { modeSwitch } from "../store/slices/modeSlice";
import { MdOutlineWbSunny, MdOutlineCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { isLogin } from "../store/slices/isLoginSlice";

const Navbar = () => {
  const [showMenues,setShowMenues] = useState(false)
  const cartData = useSelector((state) => state.cart)
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // navigate to cart
  const goToCart = () => {
    // Using condition to make the cart path protected
    if(cartData.length > 0){
      navigate("cart")
    }
    else{
      navigate("/")
    }
    dispatch(isLogin(false))
  }

  // Here we are handling Switvh Mode function
  const switchMode = () =>{
    dispatch(modeSwitch(!mode))
  }

  const showMenu = () => {
    setShowMenues(true)
    document.body.style.overflow = 'hidden'
  }
  const hideMenu = () => {
    setShowMenues(false)
    document.body.style.overflow = 'auto'

  }
  return (
    <>
      <nav className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center pt-[1%] border-gray-300 border-b-2 dark:bg-gray-800 dark:text-white dark:border-[#3c3c3c]">
          <p className="px-[3%] py-[1%] text-4xl font-semibold flex justify-center items-center justify-center fascinate">SMRT</p>
          <ul className="gap-[6%] w-[50%] flex items-center justify-start Moderustic ">
            <li>
              <Link className="focus:no-underline p-[1%] Nanum font-bold max-[750px]:invisible flex justify-center items-center text-center text-xl dark:text-white hover:text-blue-300 dark:hover:text-blue-300 hover:no-underline " to="/">EVERYTHING</Link>
            </li>
            <li>
              <Link className="focus:no-underline Nanum max-[750px]:invisible font-bold flex justify-center items-center text-center text-xl dark:text-white hover:text-blue-300 dark:hover:text-blue-300 hover:no-underline" to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link className="focus:no-underline Nanum max-[750px]:invisible font-bold flex justify-center items-center text-center text-xl dark:text-white hover:text-blue-300 dark:hover:text-blue-300 hover:no-underline" to="/about">ABOUT</Link>
            </li>
            </ul>
            <ul className="pr-[3%] w-[50%] max-[435px]:text-2xl flex items-center justify-end gap-[5%] max-[750px]:w-[70%] max-[750px]:gap-[10%] text-3xl Moderustic ">
            <li>
            <div onClick={goToCart} className="cursor-pointer w-full p-[1%] relative ">
            <BsCart4 className="cursor-pointer text-4xl" />
            <p className="text-white font-medium w-[50%] absolute top-0 left-5 p-[3%] bg-blue-500 rounded-full text-base text-center IBM dark:bg-blue-300 dark:text-black">{cartData.length}</p>
            </div>
            </li>
            <li onClick={switchMode}>
              {mode == true? <MdOutlineWbSunny className="cursor-pointer"/>: <BsMoonStars className="cursor-pointer"/>}
            </li>
            <button onClick={() => {navigate("/form")}} className="max-[750px]:hidden bg-blue-600 hover:bg-blue-700 text-xl w-[20%] text-white mt-2 rounded-lg p-3">
               +
            </button>
            <button onClick={() => {navigate("/signup")}} className="max-[750px]:hidden bg-blue-600 hover:bg-blue-700 text-xl w-[20%] text-white mt-2 rounded-lg p-3">
                SIGNUP
            </button>
            <li className="min-[750px]:invisible">
            <GiHamburgerMenu  onClick={showMenu}/>
            </li>
          </ul>
        </div>
      </nav>

      {/* for mobile screen show a separate section on clicking menu icon*/}
      {showMenues && <div className="min-[750px]:invisible absolute top-0 left-0 min-h-screen w-full absolute rounded-lg text-2xl font-bold IBM z-10">
        <div className="fixed w-full h-full bg-[#6969698e] flex items-center justify-end">
        <div className={`w-[80%] h-full bg-white dark:bg-gray-700 fixed ${showMenues ? 'slideinright' : 'slideoutright'}`}>
          <div className="w-full flex items-center justify-end p-[4%] mb-[3%]"><RxCross2 className="dark:text-white text-3xl cursor-pointer" onClick={hideMenu}/></div>
          <ul className="w-full flex flex-col items-center justify-center dark:text-white">
           <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link onClick={hideMenu} to="/"><p className="dark:text-white text-black">Everything</p></Link></li>
           <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link  onClick={hideMenu} to="/signup"><p className="dark:text-white text-black">Create your store</p></Link></li>
           <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link  onClick={hideMenu} to="/about"><p className="dark:text-white text-black">About</p></Link></li>
           <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link  onClick={hideMenu} to="/contact"><p className="dark:text-white text-black">Contact Us</p></Link></li>
          </ul>
        </div>
        </div>
      </div>}
      {/* navbar code end here */}
      <Outlet />
      <Footer />
    </>
  )
}
export default Navbar;
