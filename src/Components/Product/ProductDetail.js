import { useState, useEffect } from "react"
import FbImageLibrary from 'react-fb-image-grid'
import { useLocation } from "react-router-dom"
import { ShimmerThumbnail, ShimmerTitle, ShimmerText, ShimmerPostDetails } from "react-shimmer-effects";
import { add, quantInc } from "../../store/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import useApi from "../../Utils/Hooks/UseApi/useApi";
import ShimmerApi from "../Shimmer/ShimmerApi/ShimmerApi";
import Card from '../Card';


const ProductDetail = () => {
  const apiData = useApi()
  const location = useLocation()
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(location.state)
  }, [])
  const cartProduct = useSelector((item) => item.cart)
  localStorage.setItem('cartProduct',JSON.stringify(cartProduct))
  const cartFromLS = JSON.parse(localStorage.getItem('cartProduct'))
  const dispatch = useDispatch()
  const filterRelatedProduct = apiData && apiData.filter((item) => item.category === data.category)


  const filteredCartItem = cartProduct.filter((filterCartItem) => {return filterCartItem.data.id === location.state.id})
  console.log(filteredCartItem)

  // console.log("all selected itemsin the cart-->", cartProduct)

  const addToCart = () => {

    if(filteredCartItem.length === 0){
        dispatch(add({data:data,quant:1,total:data.price}))
    }
    else{
        dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
    }
  }


  return (
    <>
      <div className="w-full p-[3%] dark:bg-gray-900 dark:text-white">
        <div className="w-full p-[2%] flex justify-center max-[614px]:flex-col">
          <div className="w-[40%] max-[614px]:w-[80%] p-[1%] ">
            {location.state.images ? <FbImageLibrary images={location.state.images} /> :
              <ShimmerThumbnail className="w-full " rounded />}
          </div>
          {data ? <div className="w-[70%] max-[614px]:w-[100%] p-[3%] gap-6 ">
            <h1 className="text-5xl Moderustic m-6">{data.title}</h1>
            <p className="Moderustic text-3xl m-6">Category:&nbsp;<span className="text-2xl Moderustic">{data.category}</span></p>
            <p className="Moderustic text-3xl m-6">About the product</p>
            <p className="Moderustic text-2xl m-6">{data.description}</p>
            <p className="Moderustic text-2xl m-6">Product left:&nbsp;({data.stock})</p>
            <p className="Moderustic text-5xl m-6">${data.price}</p>
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
          {data ? data.reviews.map((e) => {
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
        {/* here i am using a div for related products */}
        <div className="w-full p-[1%] bg-[#fcfcfc] dark:bg-gray-900 dark:text-white">
          <h1 className="text-3xl IBM p-[2%]">Related Product</h1>
          <div className="w-full p-[1%] flex flex-wrap items-center gap-6">
            {/* card */}
            {filterRelatedProduct ? filterRelatedProduct.map((data) => {
              return (
                <>
                  <Card data={data} />
                </>
              )
            }) : <ShimmerApi />}

          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetail