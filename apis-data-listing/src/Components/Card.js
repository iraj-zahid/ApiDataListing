import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { add, quantInc } from "../store/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import StarRatings from 'react-star-ratings';

const Card = (prop) => {
    const images = prop.data.imageName.split(',')
    const UrlImage = `http://localhost:5000/public/images/${images[0]}`
    console.log(UrlImage)
    console.log(images)
    const cartProduct = useSelector((item) => item.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // going to detail page
    const goToDetail = (selectedProduct) => {
        navigate("/detailpage", { state: selectedProduct })
    }
  
    // Here we are filtering API data by id to determine is the product already added to cart?
    const filteredCartItem = cartProduct.filter((filterCartItem) => filterCartItem.data.id === prop.data.id)

    //Here the function is using to Add product to cart or increase quantity
    const addToCart = () => {
        if (filteredCartItem.length === 0) {
            dispatch(add({ data: prop.data, quant: 1, total: parseInt(prop.data.price) }))
        }
        else {
            dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
        }
    }
    return (
        <>
            <div className="w-[23%] max-[614px]:w-[30%] p-[1%] flex flex-col justify-center dark:rounded-lg dark:text-white relative">
                <div onClick={() => goToDetail(prop.data)} className="w-full px-[10%] py-[30%] bg-white dark:bg-gray-900 dark:border-[1px] dark:border-gray-500 rounded-xl zoom cursor-pointer"><img src={UrlImage} /></div>
                <h1 className="text-3xl p-[1%] Moderustic truncate">{prop.data.title}</h1>
                <div> <span><strike className="Moderustic">{prop.data.actualPrice}&nbsp;</strike></span><span className="text-xl font-bold Moderustic">&nbsp;${prop.data.price}</span></div>
                <div className="gap-6 p-[1%]">
                    <span>ratings</span>
                    <span className="Moderustic">({prop.data.stock})</span>
                </div>
                <button onClick={addToCart} className="p-[2%] bg-blue-600 hover:bg-blue-700 w-[40%] max-[500px]:w-[50%] text-white font-bold max-[500px]:font-semibold mt-2 mb-2 rounded text-lg flex items-center justify-center">
                    Add
                </button>
                <div className="max-[550px]:hidden">
                    <StarRatings
                        rating={parseInt(prop.data.rating)}
                        starDimension="19px"
                        starSpacing="2px"
                        starRatedColor="#f1d900"
                    />
                </div>
                <div className="min-[550px]:hidden">
                    <StarRatings
                        rating={parseInt(prop.data.rating)}
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