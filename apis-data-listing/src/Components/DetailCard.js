import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { add, quantInc } from "../store/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import StarRatings from 'react-star-ratings';

const DetailCard = (prop) => {
    console.log(prop)
    const images = prop.data.imageName.split(',')
    const UrlImage = `http://localhost:5000/public/images/${images[0]}`
    const [cartHover, setCartHover] = useState(false)
    const cartProduct = useSelector((item) => item.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // navigate to detail page
    const goToDetail = (selectedProduct) => {
        navigate("/detailpage", { state: selectedProduct })
        window.scrollTo({top:0, behavior:'smooth'})
    }
    
    // Here we are filtering API data by id to determine is the product already added to cart?
    const filteredCartItem = cartProduct.filter((filterCartItem) => filterCartItem.data.id === prop.data.id)

    //Here the function is using to Add product to cart or increase quantity
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
        {/* We are using separate card for related products duw to adjust css according to Swip Library */}
            <div className="w-[70%] max-[900px]:w-[85%] max-[400px]:w-[85%] p-[1%] flex flex-col justify-center dark:rounded-lg dark:text-white relative">
                <div onClick={() => goToDetail(prop.data)} className="w-full px-[10%] py-[30%] bg-white dark:bg-gray-900 dark:border-[1px] dark:border-gray-500 rounded-xl cursor-pointer"><img src={UrlImage} /></div>
                <h1 className="text-3xl max-[550px]:text-2xl p-[1%] Moderustic truncate">{prop.data.title}</h1>
                <div> <span><strike className="Moderustic">$700&nbsp;</strike></span><span className="text-xl font-bold Moderustic">&nbsp;${prop.data.price}</span></div>
                <div className="gap-6 p-[1%]">
                    <span>ratings</span>
                    <span className="Moderustic">({prop.data.stock})</span>
                </div>
                <div className="max-[550px]:hidden">
                   {prop.data.rating && <StarRatings
                        rating={parseInt(prop.data.rating)}
                        starDimension="19px"
                        starSpacing="2px"
                        starRatedColor="#f1d900"
                    />}
                </div>
                 <div className="min-[550px]:hidden">
                    {prop.data.rating && <StarRatings
                        rating={parseInt(prop.data.rating)}
                        starDimension="14px"
                        starSpacing="0px"
                        starRatedColor="#f1d900"
                    />}
                </div>
            </div>
        </>
    )
}
export default DetailCard