import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const Navbar = () => {

  return (
    <>

      <nav>
        <div className="w-full pl-[3%] flex items-center gap-[5%] border-gray-300 border-b-2 justify-between">
          <h3 className="IBM flex justify-center items-center">SMRT</h3>
         
          <ul className=" m-[2%] w-[100%] max-[435px]:text-2xl pr-[3%] flex items-center max-[1000px]:justify-end justify-center gap-[7%] text-3xl Moderustic">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup&nbsp;Now</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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