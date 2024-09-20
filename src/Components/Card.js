import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { add, quantInc } from "../store/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import { IoBagAdd } from "react-icons/io5";
import StarRatings from 'react-star-ratings';
const Card = (prop) => {
    const [cartHover, setCartHover] = useState(false)
    const cartProduct = useSelector((item) => item.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goToDetail = (selectedProduct) => {
        navigate("/detailpage", { state: selectedProduct })
    }

    const filteredCartItem = cartProduct.filter((filterCartItem) => filterCartItem.data.id === prop.data.id)


    const addToCart = () => {
        if (filteredCartItem.length === 0) {
            dispatch(add({ data: prop.data, quant: 1, total: prop.data.price }))
        }
        else {
            dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
        }
    }
    return (
        <>
            <div className="w-[23%] max-[614px]:w-[30%] p-[1%] flex flex-col justify-center dark:rounded-lg dark:text-white relative">
                <div onMouseOver={() => { setCartHover(true) }} onMouseLeave={() => { setCartHover(false) }} onClick={() => goToDetail(prop.data)} className="w-full px-[10%] py-[30%] bg-white dark:bg-gray-900 dark:border-[1px] dark:border-gray-500 rounded-xl zoom cursor-pointer"><img src={prop.data.thumbnail} /></div>
                <h1 className="text-3xl p-[1%] Moderustic truncate">{prop.data.title}</h1>
                <div> <span><strike className="Moderustic">$700&nbsp;</strike></span><span className="text-xl font-bold Moderustic">&nbsp;${prop.data.price}</span></div>
                <div className="gap-6 p-[1%]">
                    <span>ratings</span>
                    <span className="Moderustic">({prop.data.stock})</span>
                </div>
                <button onMouseOver={() => { setCartHover(true) }} onMouseLeave={() => { setCartHover(false) }} onClick={addToCart} className={`absolute top-8 left-3/4 p-[4%] hover:text-black  bg-[#dadada] hover:bg-[#eeeeee] flex items-center justify-center text-xl mt-2 rounded-full p-3 ${cartHover ? 'visible' : 'invisible'}`}>
                    <IoBagAdd className="text-2xl text-[#3b3b3b]" />
                </button>
                <div className="max-[550px]:hidden">
                    <StarRatings
                        rating={prop.data.rating}
                        starDimension="19px"
                        starSpacing="2px"
                        starRatedColor="#f1d900"
                    />
                </div>
                 <div className="min-[550px]:hidden">
                    <StarRatings
                        rating={prop.data.rating}
                        starDimension="14px"
                        starSpacing="1px"
                        starRatedColor="#f1d900"
                    />
                </div>
            </div>
        </>
    )
}
export default Card