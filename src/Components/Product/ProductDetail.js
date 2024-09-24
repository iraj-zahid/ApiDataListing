import { useState, useEffect } from "react"
import FbImageLibrary from 'react-fb-image-grid'
import { useLocation } from "react-router-dom"
import { ShimmerThumbnail, ShimmerTitle, ShimmerText, ShimmerPostDetails } from "react-shimmer-effects";
import { add, quantInc } from "../../store/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import useApi from "../../Utils/Hooks/UseApi/useApi";
import ShimmerApi from "../Shimmer/ShimmerApi/ShimmerApi";
import DetailCard from '../DetailCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



const ProductDetail = () => {
  const dispatch = useDispatch()
  const cartProduct = useSelector((item) => item.cart)
  const apiData = useApi()
  const location = useLocation()
  const [data, setData] = useState(null)
  // Here we are updating data with product's detail to add data to the cart
  useEffect(() => {
    setData(location.state)
  }, [])

  // Here we are filtering API data by category to show related product
  const filterRelatedProduct = apiData && apiData.filter((item) => item.category === data.category)

  // Here we are filtering API data by id to determine is the product already added to cart?
  const filteredCartItem = cartProduct.filter((filterCartItem) => { return filterCartItem.data.id === location.state.id })

  //Here the function is using to Add product to cart or increase quantity
  const addToCart = () => {
    if (filteredCartItem.length === 0) {
      dispatch(add({ data: data, quant: 1, total: data.price }))
    }
    else {
      dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
    }
  }


  return (
    <>
      <div className="w-full p-[3%] dark:bg-gray-900 dark:text-white">
        <div className="w-full p-[2%] flex justify-center max-[614px]:flex-col">
          {/* The images about product showing on right side */}
          <div className="w-[40%] max-[614px]:w-[80%] p-[1%] ">
            {location.state.images ? <FbImageLibrary images={location.state.images} /> :
              <ShimmerThumbnail className="w-full " rounded />}
          </div>
          {/* The detail of product showing on the right side of div */}
          {data ? <div className="w-[70%] max-[614px]:w-[100%] p-[3%] gap-6 ">
            <h1 className="text-5xl Moderustic m-6">{location.state.title}</h1>
            <p className="Moderustic text-3xl m-6">Category:&nbsp;<span className="text-2xl Moderustic">{location.state.category}</span></p>
            <p className="Moderustic text-3xl m-6">About the product:</p>
            <p className="Moderustic text-2xl m-6">{location.state.description}</p>
            <p className="Moderustic text-2xl m-6">Product left:&nbsp;({location.state.stock})</p>
            <p className="Moderustic text-5xl m-6">${location.state.price}</p>
            <button onClick={addToCart} className=" bg-blue-600 hover:bg-blue-700 w-[40%] text-white font-bold mt-2  ml-3 rounded h-[55px]">
              Add to cart
            </button>
          </div> :
            <div className="w-[70%] p-[3%] gap-6 ">
              <ShimmerTitle line={2} gap={10} variant="primary" />
              <ShimmerText line={5} gap={10} />
            </div>
          }
        </div>
        {/* reviewsection */}
        <div className="w-[90%]  flex justify-center flex-col p-[2%] m-[3%] dark:bg-gray-800 rounded-lg">
          <p className="IBM text-2xl text-blue-400">reviews </p>
          {location.state ? location.state.reviews.map((e) => {
            return <>
              <div className="border-t-[1px] border-gray-800 dark:border-gray-500 w-[80%] p-[1%]">
                <p className="text-lg IBM">{e.reviewerName}&nbsp;&nbsp;&nbsp;<span className="text-xl text-blue-400">verified purchase</span></p>
                <p className="text-2xl IBM">{e.comment}</p>
              </div>
            </>
          }) :
            <ShimmerPostDetails card cta variant="SIMPLE" />
          }
        </div>
        {/* Here is the code about related products */}
        <div className="w-full bg-[#fcfcfc] dark:bg-gray-900 dark:text-white">
          <h1 className="text-3xl IBM p-[2%]">Related Product</h1>
          {/* card */}
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={0}
            loop={false}
          >
            {filterRelatedProduct ? filterRelatedProduct.map((data) => {
              return (
                <>
                  <SwiperSlide ><DetailCard data={data} /></SwiperSlide>
                </>
              )
            }) : <ShimmerApi />}
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default ProductDetail