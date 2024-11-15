import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { add, quantInc } from "../store/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";

const Card = (prop) => {
    const images = prop.data.imageName.split(',')
    const isUserLogin = useSelector((state) => state.isLogin)
    const loginUserData = useSelector((data) => data.loginData)
    const UrlImage = `http://localhost:5000/public/images/${images[0]}`
    const cartProduct = useSelector((item) => item.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // going to detail page
    const goToDetail = (selectedProduct) => {
        navigate("/detailpage", { state: selectedProduct })
    }

    // Here we are filtering API data by id to determine is the product already added to cart?
    const filteredCartItem = loginUserData && cartProduct && cartProduct.filter((filterCartItem) => filterCartItem.data._id === prop.data._id && filterCartItem.email === loginUserData.email)
    // const filterCart = loginUserData && cartProduct && cartProduct.filter((items) => items.email === loginUserData.email)
    //Here the function is using to Add product to cart or increase quantity
    const addToCart = () => {
        if (isUserLogin) {
            if (filteredCartItem.length === 0) {
                dispatch(add({ data: prop.data, quant: 1, total: parseInt(prop.data.price), email: loginUserData.email }))
            }
            else {
                dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
            }
        } else {
            navigate("/login")
        }

    }
    return (
        <>
            <div className="w-[19%] max-[614px]:w-[40%] p-[1%] flex flex-col justify-center dark:rounded-lg dark:text-white relative">
                <div onClick={() => goToDetail(prop.data)} className="w-full zoom cursor-pointer"><img className='rounded-xl' src={UrlImage} /></div>
                <p className="text-lg p-[1%] Moderustic IBM dark:text-[#FFFFFFA6]">{prop.data.category}</p>
                <p className="text-3xl p-0 max-[500px]:text-2xl Moderustic truncate max-[500px]:text-xl">{prop.data.title}</p>
                <div> <span><strike className="Moderustic text-base">{prop.data.actualPrice}&nbsp;</strike></span><span className="text-xl font-semibold Moderustic ml-[2px]">&nbsp;${prop.data.price}</span></div>

                <button onClick={addToCart} class='flex items-center justify-center gap-2 text-lg bg-indigo-500 text-white rounded-full max-[500px]:rounded p-[2%] cursor-pointer w-[27%] max-[1200px]:w-[70%] max-[500px]:w-[100%] max-[500px]:p-[3%] font-medium  max-[500px]:font-semibold leading-5 text-center mt-2 mb-2 shadow-xs transition-all duration-500 hover:bg-indigo-700'>
                <BsCart4 className="cursor-pointer text-2xl" /> Add</button>

            </div>
        </>
    )
}
export default Card