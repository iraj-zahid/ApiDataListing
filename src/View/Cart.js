import { useSelector, useDispatch } from "react-redux"
import { deselect, quantInc, quantDec, removeAll } from "../store/slices/cartSlice"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import {useNavigate} from "react-router-dom"

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector((cartItem) => cartItem.cart)
    if(cartItems.length === 0){
        navigate("/")
      }
    const removeFromCart = (product) => {
        dispatch(deselect(cartItems.indexOf(product)))
    }
    const addQuant = (product) => {
        dispatch(quantInc(cartItems.indexOf(product)))
    }
    const decQuant = (product) => {
        dispatch(quantDec(cartItems.indexOf(product)))
    }
    const removeAllFromCart = () => {
        dispatch(removeAll())
    }
    return(
        <>
        <div className="w-full min-h-screen p-[2%] flex flex-col  ">
             <button  onClick={removeAllFromCart} className="rounded-2xl sm:p-[1%] p-[2%] bg-[black] hover:bg-[#333333] w-[15%] text-white font-bold mt-2  ml-3 rounded text-lg flex items-center justify-center">
             Clear
             </button>
             <div className="IBM gap-[6%] w-full p-[1%] mt-[2%] flex items-center justify-center border-b-2 border-gray-600">
                <p className="p-[1%] m-[1%] w-[35%] ">Items</p>
                <p className="p-[1%] m-[1%] w-[10%] flex items-center justify-center">Price</p>
                <p className="p-[1%] m-[1%] w-[10%] flex items-center justify-center">Quantity</p>
                <p className="p-[1%] m-[1%] w-[10%] flex items-center justify-end">Total</p>
             </div>
             {cartItems && cartItems.map((cartProduct) => {
               return (
                <>
                <div className="IBM w-full gap-[3%] p-[1%] bg-[white] rounded-lg mt-[3%] mb-[3%] flex justify-center items-center border-b-[1px] border-black">
                    <div className="w-[15%] p-[1%] flex justify-center items-center"><img src={cartProduct.data.thumbnail} /></div>
                    <p className="w-[20%] p-[1%] m-[1%] flex justify-center items-center">{cartProduct.data.title}</p>
                    <p className="w-[10%] p-[1%] m-[1%] flex justify-center items-center">${cartProduct.data.price}</p>
                    <div className="m-[1%] w-[10%] max-[435px]:w-[20%] flex items-center justify-center p-[1%] text-black rounded-lg"><p className="rounded-lg p-[6%] bg-[#7c7c7c88] cursor-pointer"><IoMdAdd onClick={() => addQuant(cartProduct)}/></p><p className="IBM rounded-lg p-[5%] ">{cartProduct.quant}</p> <p className="p-[6%] rounded-lg bg-[#7c7c7c88] cursor-pointer"><FaMinus onClick={() => decQuant(cartProduct)}/></p></div>
                    <button  onClick={() => removeFromCart(cartProduct)} className="m-[1%] max-[435px] p-[1%] w-[5%] text-white font-bold mt-2  ml-3 rounded flex items-center justify-center">
                    <RiDeleteBin6Fill className="text-[red] text-4xl"/>
                    </button>
                    <p className="p-[1%] m-[1%] w-[5%] text-2xl font-semibold IBM flex items-center justify-center">${Math.round(cartProduct.total)}</p>
                </div>
                </>
               )
            })}
        </div>
        </>
    )
}
export default Cart