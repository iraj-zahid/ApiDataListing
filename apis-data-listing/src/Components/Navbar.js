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
import { LuLogOut } from "react-icons/lu";
import { isReview } from "../store/slices/wantToReviewSlice"
import { VscDiffAdded } from "react-icons/vsc";
import { loginData } from '../store/slices/loginDataSlice';
import { useUserDataApi } from "../Utils/Hooks/useUserDataApi";

const Navbar = () => {
  const [showMenues, setShowMenues] = useState(false)
  const [ImageName, setImageName] = useState("notfound")
  const cartData = useSelector((state) => state.cart)
  const isUserLogin = useSelector((state) => state.isLogin)
  const loginUserData = useSelector((data) => data.loginData)
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useUserDataApi()
  const filterUserImage = userData && loginUserData && userData.filter((userdata) => userdata.email === loginUserData.email)
  const UrlImage = `http://localhost:5000/public/images/${filterUserImage && filterUserImage[0].imageName}`
  const filterCart = loginUserData && cartData && cartData.filter((items) => items.email === loginUserData.email)
  // navigate to cart
  const goToCart = () => {
    // Using condition to make the cart path protected
    if (filterCart.length > 0) {
      navigate("cart")
    }
    else {
      navigate("/")
    }
  }

  const goToForm = () => {
    if (isUserLogin) {
      navigate("/form")
    }
    else {
      navigate("/login")

    }
    setShowMenues(false)
    document.body.style.overflow = 'auto'
  }

  // Here we are handling Switvh Mode function
  const switchMode = () => {
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
  const logout = () => {
    dispatch(isLogin(false))
    dispatch(isReview(false))
    dispatch(loginData(null))
    setShowMenues(false)
    document.body.style.overflow = 'auto'
  }
  return (
    <>
      <nav className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center pt-[1%] bg-[#F9F9F8] dark:bg-[#1c1c20] dark:text-white">
          <p className="px-[3%] py-[1%] text-4xl font-semibold flex justify-center items-center justify-center fascinate">DevPlay</p>
          <ul className="gap-[6%] w-[50%] max-[750px]:w-[30%] flex items-center justify-start Moderustic ">
            <li>
              <Link className="focus:no-underline p-[1%] hubot font-bold max-[750px]:invisible flex justify-center items-center text-[#3c0081] text-center text-xl dark:text-white hover:text-[#7700ff] dark:hover:text-blue-300 hover:no-underline" to="/">Everything</Link>
            </li>
            <li>
              <Link className="focus:no-underline hubot max-[750px]:invisible font-bold flex justify-center items-center text-[#3c0081] text-center text-xl dark:text-white hover:text-[#7700ff] dark:hover:text-blue-300 hover:no-underline" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="focus:no-underline hubot max-[750px]:invisible font-bold flex justify-center items-center text-[#3c0081] text-center text-xl dark:text-white hover:text-[#7700ff] dark:hover:text-blue-300 hover:no-underline" to="/about">About</Link>
            </li>
          </ul>
          <ul className="pr-[3%] max-[750px]:w-[70%] w-[50%] max-[435px]:text-2xl flex items-center justify-end gap-[3%] max-[750px]:w-[70%] max-[750px]:gap-[10%] text-3xl Moderustic ">
            <li>
              <div onClick={goToCart} className="cursor-pointer w-full p-[1%] relative ">
                <BsCart4 className="cursor-pointer text-4xl" />
                <p className="text-white font-medium w-[50%] absolute top-0 left-5 p-[3%] bg-indigo-500 rounded-full text-base text-center IBM dark:bg-indigo-400 dark:text-white">{filterCart ? filterCart.length : "0"}</p>
              </div>
            </li>
            <li className="min-[499px]:w-[6%] cursor-pointer" onClick={switchMode}>
                {mode == true ? <MdOutlineWbSunny className="cursor-pointer text-yellow-400" /> : <BsMoonStars className="cursor-pointer text-violet-700" />}
            </li>
            <li className="max-[750px]:hidden" onClick={goToForm}>
              <VscDiffAdded className="cursor-pointer" />
            </li>
            <button onClick={() => { navigate("/signup") }} className="relative inline-flex items-center justify-center overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-0 hover:ring-purple-500 max-[750px]:hidden bg-blue-600 hover:bg-blue-700 text-xl w-[20%] text-white mt-2 rounded-lg p-3">
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span
                class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white text-base font-semibold">Signup</span>
            </button>
            
            {loginUserData &&
              <div className="max-[750px]:w-[20px] max-[750px]:h-[20px] w-[30px] h-[30px] cursor-pointer rounded-[50%]">
                <img src={UrlImage} className="rounded-[50%] w-full h-[100%] bg-contain" />
              </div>
            }
            <li className="max-[750px]:hidden" onClick={logout}>
              {isUserLogin && <LuLogOut className="cursor-pointer" />}
            </li>
            <li className="min-[750px]:invisible">
              <GiHamburgerMenu onClick={showMenu} />
            </li>
          </ul>
        </div>
      </nav>

      {/* for mobile screen show a separate section on clicking menu icon*/}
      {showMenues && <div className="min-[750px]:invisible absolute top-0 left-0 min-h-screen w-full absolute rounded-lg text-2xl font-bold IBM z-10">
        <div className="fixed w-full h-full bg-[#6969698e] flex items-center justify-end">
          <div className={`w-[80%] h-full bg-white dark:bg-[#1c1c20] fixed ${showMenues ? 'slideinright' : 'slideoutright'}`}>
            <div className="w-full flex items-center justify-end p-[4%] mb-[3%]"><RxCross2 className="dark:text-white text-3xl cursor-pointer" onClick={hideMenu} /></div>
            <ul className="w-full flex flex-col items-center justify-center dark:text-white">
              <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link onClick={hideMenu} to="/"><p className="dark:text-white text-black">Everything</p></Link></li>
              <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link onClick={hideMenu} to="/signup"><p className="dark:text-white text-black">Get Started</p></Link></li>
              <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link onClick={hideMenu} to="/about"><p className="dark:text-white text-black">About</p></Link></li>
              <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link onClick={hideMenu} to="/contact"><p className="dark:text-white text-black">Contact Us</p></Link></li>
              <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] "><Link onClick={goToForm} to="/form"><p className="dark:text-white text-black">Create your store</p></Link></li>
              <li className="w-full bg-[#f0f0f0] dark:bg-transparent p-[3%] border-b-[1px] border-bg-gray-800 p-[6%] " onClick={logout}>{isUserLogin && <LuLogOut className="cursor-pointer dark:text-white text-black" />}</li>
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
