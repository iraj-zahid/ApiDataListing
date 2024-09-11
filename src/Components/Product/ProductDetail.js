import { useState, useEffect } from "react"
import FbImageLibrary from 'react-fb-image-grid'
import { useLocation } from "react-router-dom"
import { ShimmerThumbnail, ShimmerTitle, ShimmerText, ShimmerPostDetails } from "react-shimmer-effects";
import {add,quantInc} from "../../store/slices/cartSlice"
import {useDispatch,useSelector} from "react-redux"


const ProductDetail = () => {
  const location = useLocation()
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(location.state)
  }, [])
  const cartProduct = useSelector((item) => item.cart) 
  const dispatch = useDispatch()
      
  // const filteredCartItem =  cartProduct.filter((filterCartItem) => filterCartItem.data.id === data.id)
  // console.log(filteredCartItem)

  const addToCart = () => {

        // if(filteredCartItem.length === 0){
        // dispatch(add({data:data,quant:1,total:data.price}))
        // }
        // else{
        //     dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
        // }
    } 
 
 
  return (
    <>
      <div className="w-full p-[3%] ">
        <div className="w-full p-[2%] flex justify-center max-[614px]:flex-col">
          <div className="w-[40%]  max-[614px]:w-[80%] p-[1%] ">
            {location.state.images ? <FbImageLibrary images={location.state.images} /> :
              <ShimmerThumbnail className="w-full " rounded />}
          </div>
          {data ? <div className="w-[70%] max-[614px]:w-[100%] p-[3%] gap-6 ">
            <h1 className="text-5xl Moderustic m-6">{data.title}</h1>
            <p className="Moderustic text-3xl m-6">Category:{data.category}</p>
            <p className="Moderustic text-3xl m-6">About the product</p>
            <p className="Moderustic text-2xl m-6">{data.description}</p>
            <p className="Moderustic text-2xl m-6">Product left:-&nbsp;({data.stock})</p>
            <p className="Moderustic text-5xl m-6">${data.price}</p>
            <button onClick={addToCart} className=" bg-[#c300ffd5] hover:bg-[#71009e] w-[40%] text-white font-bold mt-2  ml-3 rounded h-[55px]">
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
        <div className="w-full  flex justify-center flex-col p-[1%] ">
          <p className="Moderustic text-4xl">Reviews </p>
          {data ? data.reviews.map((e) => {
            return <>
              <div className="border-t-2 border-black w-[80%] p-[1%]">
                <p className="text-lg IBM">{e.reviewerName}&nbsp;&nbsp;&nbsp;<span className="text-xl text-blue-400">verified purchase</span></p>
                <p className="text-2xl IBM">{e.comment}</p>
              </div>
            </>
          }) :
            <ShimmerPostDetails card cta variant="SIMPLE" />
          }
        </div>
      </div>
    </>
  )
}
export default ProductDetail