import { useNavigate } from 'react-router-dom';
import {add,quantInc} from "../store/slices/cartSlice"
import {useDispatch,useSelector} from "react-redux"
const Card = (prop) => {
    const cartProduct = useSelector((item) => item.cart) 
    const dispatch = useDispatch()
    const navigate = useNavigate()  
    const goToDetail = (selectedProduct) => {
        navigate("/detailpage", { state: selectedProduct })
    }
      
    const filteredCartItem = cartProduct.filter((filterCartItem) => filterCartItem.data.id === prop.data.id)
    const addToCart = () => {

        if(filteredCartItem.length === 0){
        dispatch(add({data:prop.data,quant:0}))
        }
        else{
            dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
            // console.log(filteredCartItem)
        }
    }
    return (
        <>
            <div  className="w-[23%] max-[614px]:w-[30%] p-[1%] ">
                <div onClick={() => goToDetail(prop.data)} className="w-full px-[10%] py-[30%] bg-white rounded-xl zoom cursor-pointer"><img src={prop.data.thumbnail} /></div>
                <h1 className="text-3xl p-[1%] Moderustic">{prop.data.title}</h1>
                <div> <span><strike className="Moderustic">$700&nbsp;</strike></span><span className="text-xl font-bold Moderustic">&nbsp;${prop.data.price}</span></div>
                <div className="gap-6 p-[1%]">
                    <span>ratings</span>
                    <span className="Moderustic">({prop.data.stock})</span>
                </div>
                <button onClick={addToCart} className=" bg-[#c300ffd5] hover:bg-[#71009e] w-[40%] text-white font-bold mt-2  ml-3 rounded h-[30px]">
                Add to cart
                </button>
            </div>
        </>
    )
}
export default Card