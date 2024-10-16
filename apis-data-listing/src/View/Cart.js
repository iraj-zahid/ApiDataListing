import { useSelector, useDispatch } from "react-redux"
import { deselect, quantInc, quantDec, removeAll } from "../store/slices/cartSlice"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import {useNavigate} from "react-router-dom"

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector((cartItem) => cartItem.cart)
    const UrlImage = `http://localhost:5000/public/images/`
    console.log(cartItems)
    if(cartItems.length === 0){
        navigate("/")
      }
      
    //   here all the function which are we using through redux
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

    // here calculating total amount of all products
    const totalAmount =  cartItems.length > 0 && cartItems.reduce((acc, product) => {
        return acc + product.total
    },0)
    
    return(
        <>
        <div className="w-full min-h-screen p-[2%] flex flex-col  dark:bg-gray-900 dark:text-white">
             <div className="w-full flex items-center justify-end ">
             <button  onClick={removeAllFromCart} className="rounded-2xl sm:p-[1%] p-[2%] bg-blue-600 hover:bg-blue-700 w-[15%] min-[750px]:w-[10%] text-white font-bold max-[500px]:font-semibold mt-2  ml-3 rounded text-lg flex items-center justify-center">
             Clear
             </button>
             </div>
             <div className="font-bold max-[500px]:font-semibold IBM gap-[4%] w-full p-[1%] mt-[2%] flex items-center justify-center border-b-2 border-gray-600">
                <p className="p-[1%] m-[2%] w-[35%] ">Items</p>
                <p className="p-[1%] m-[1%] w-[10%] min-[500px]:mr-[2%] flex items-center justify-center ">Price</p>
                <p className="p-[1%] m-[1%] mr-[2%] w-[10%] max-[500px]:w-[12%] flex items-center justify-center ">Quantity</p>
                <p className="p-[1%] m-[1%] ml-[5%] w-[9%] flex items-center justify-center ">Subtotal</p>
             </div>
             {cartItems && cartItems.map((cartProduct) => {
               return (
                <>
                <div className="IBM w-full gap-[3%] max-[500px]:gap-[5%] rounded-lg mt-[1%] mb-[1%] dark:bg-gray-800 flex justify-center items-center border-b-[1px] border-black">
                    <div className="w-[15%] p-[1%] flex justify-center items-center"><img src={`http://localhost:5000/public/images/${cartProduct.data.imageName.split(',')[0]}`} /></div>
                    <p className="w-[20%] p-[1%] flex justify-center items-center text-2xl max-[500px]:text-lg">{cartProduct.data.title}</p>
                    <p className="w-[10%] p-[1%] flex justify-center items-center text-2xl max-[500px]:text-lg font-medium">${cartProduct.data.price}</p>
                    <div className="w-[10%] max-[500px]:w-[8%] max-[500px]:ml-[1%] min-[500px]:ml-[3%] flex items-center justify-center p-[1%] text-black rounded-lg"><p className="rounded-lg p-[6%] bg-[#a1a1a162] cursor-pointer"><IoMdAdd className="dark:text-white" onClick={() => addQuant(cartProduct)}/></p><p className="IBM rounded-lg p-[5%] dark:text-white">{cartProduct.quant}</p> <p className="p-[6%] rounded-lg bg-[#a1a1a162] cursor-pointer"><FaMinus className="dark:text-white" onClick={() => decQuant(cartProduct)}/></p></div>
                    <button  onClick={() => removeFromCart(cartProduct)} className="m-[1%] max-[500px]:mb-[1%] w-[5%] max-[500px]:w-[6%] text-white font-bold  ml-3 rounded flex items-center justify-center">
                    <MdOutlineCancel className="text-black dark:text-white text-4xl max-[500px]:text-3xl "/>
                    </button>
                    <p className="p-[1%] m-[1%] max-[500px]:mb-[1%] w-[5%] font-semibold IBM flex items-center justify-center text-3xl max-[500px]:text-lg font-bold">${Number(cartProduct.total).toFixed(2)}</p>
                </div>
                </>
               )
            })}
                <div className="w-full p-[1%] flex items-center justify-end mt-[3%]">
                    <div className="w-[40%] max-[750px]:w-[60%] p-[1%] flex items-center justify-center flex-col ">
                        <p className="p-[1%] text-2xl max-[750px]:text-xl">Total Amount: <span className="font-bold">${Number(totalAmount).toFixed(2)}</span></p>
                        <button className="w-[70%] text-2xl text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">CheckOut</button>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Cart