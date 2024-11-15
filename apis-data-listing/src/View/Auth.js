import Login from "../Components/Auth/Login"
import Signup from "../Components/Auth/Signup"
import { useSelector } from "react-redux"
const Auth = () => {
  const isUserSignup = useSelector((reducers) => reducers.isSignup)
  console.log(isUserSignup)
    return(
        <>
        <div className="w-full">
            {isUserSignup?<Signup/>:<Login/>}
        </div>
        </>
    )
}
export default Auth;