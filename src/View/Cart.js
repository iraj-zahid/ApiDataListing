import { useSelector, useDispatch } from "react-redux"
import { deselect, quantInc, quantDec, removeAll } from "../store/slices/cartSlice"
import { RiDeleteBin6Fill } from "react-icons/ri";
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((cartItem) => cartItem.cart)
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
        <div className="w-full p-[2%]  flex flex-col  ">
             <button  onClick={removeAllFromCart} className="rounded-2xl p-[1%] bg-[black] hover:bg-[#333333] w-[15%] text-white font-bold mt-2  ml-3 rounded h-[35px]">
              Clear
             </button>
             {cartItems && cartItems.map((cartProduct) => {
               return (
                <>
                <div className="w-full gap-6 p-[1%] bg-[white] rounded-lg m-[1%] flex items-center">
                    <div className="w-[15%] p-[1%] "><img src={cartProduct.data.thumbnail} /></div>
                    <p className="w-[30%] p-[1%]">{cartProduct.data.title}</p>
                    <p className="w-[10%] p-[1%] m-[1%]">${cartProduct.data.price}</p>
                    <div className=" w-[10%] max-[435px]:w-[20%] flex items-center justify-center gap-2 p-[1%] bg-black text-white rounded-lg"><button onClick={() => addQuant(cartProduct)}>+</button><p className="text-white text-xl">{cartProduct.quant}</p><button onClick={() => decQuant(cartProduct)}>-</button></div>
                    <button  onClick={() => removeFromCart(cartProduct)} className="max-[435px] p-[1%] w-[15%] text-white font-bold mt-2  ml-3 rounded ">
                    <RiDeleteBin6Fill className="text-[red] text-3xl"/>
                    </button>
                </div>
                </>
               )
            })}
        </div>
        </>
    )
}
export default Cart