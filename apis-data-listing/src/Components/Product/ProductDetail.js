import { useState, useEffect } from "react"
import FbImageLibrary from 'react-fb-image-grid'
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { ShimmerThumbnail, ShimmerTitle, ShimmerText, ShimmerPostDetails } from "react-shimmer-effects";
import StarRatings from 'react-star-ratings';
import { add, quantInc } from "../../store/slices/cartSlice"
import { isReview } from "../../store/slices/wantToReviewSlice"
import { useDispatch, useSelector } from "react-redux"
import { useGetApi } from "../../Utils/Hooks/useGetApi";
import ShimmerApi from "../Shimmer/ShimmerApi/ShimmerApi";
import DetailCard from '../DetailCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from "axios";
import { useReviewApi } from "../../Utils/Hooks/useReviewApi";
import Swal from 'sweetalert2'


const ProductDetail = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartProduct = useSelector((item) => item.cart)
  const wannaReview = useSelector((review) => review.wantToReview)
  const loginUserData = useSelector((data) => data.loginData)
  const IsUserLogin = useSelector((data) => data.isLogin)
  const [review, setReview] = useState({
    name: null,
    review: null,
    _id:location.state._id
  })
  const apiData = useGetApi()
  const reviews = useReviewApi()
  const [data, setData] = useState(null)
  const images = location.state.imageName.split(',')
  for (let i = 0; i < images.length; i++) {

    images[i] = "http://localhost:5000/public/images/" + images[i]; // Adds " is a fruit" to each element

  }
  const UrlImage = `http://localhost:5000/public/images/${images}`
  console.log(reviews)
  // Here we are updating data with product's detail to add data to the cart
  useEffect(() => {
    setData(location.state)
    console.log(location.state)
  }, [])

  // Here we are filtering API data by category to show related product
  const filterRelatedProduct = apiData && apiData.filter((item) => item.category === data.category)

  // Here we are filtering API data by id to determine is the product already added to cart?
  const filteredCartItem = cartProduct && cartProduct.filter((filterCartItem) => { return filterCartItem.data._id === location.state._id })

  //Here the function is using to Add product to cart or increase quantity
  const addToCart = () => {
    if(IsUserLogin){
      if (filteredCartItem.length === 0) {
        dispatch(add({ data: data, quant: 1, total: parseInt(data.price), email: loginUserData.email}))
      }
      else {
        dispatch(quantInc(cartProduct.indexOf(filteredCartItem[0])))
      }
    }else{
      navigate("/login")
    }
  }

  // here we are going to do reviewSwitch
  const reviewSwitch = () => {
    if(IsUserLogin){
      dispatch(isReview(!wannaReview))
    }
    else{
      navigate("/login")
    }
  }
  const reviewSubmit = async () => {
    const data = await axios.post('http://localhost:5000/apis/reviews/create', review)
    dispatch(isReview(false))
  }
  const filterReview = reviews && reviews.filter((review) => review._id === location.state._id)
  const updateProduct = () => {
    navigate("/editform",  { state: location.state })
  }
  console.log(filterReview)
 const deleteProduct = async () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      const data = axios.post('http://localhost:5000/apis/products/delete',{_id:location.state._id})
      navigate("/")
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
 }

  return (
    <>
      <div className="w-full p-[3%] bg-[#F2F3F2] dark:bg-[#101014] dark:text-white">
        <div className="w-full p-[2%] flex justify-center max-[614px]:flex-col">
          {/* The images about product showing on right side */}
          <div className="w-[40%] max-[614px]:w-[80%] p-[1%] ">
            {UrlImage ? <FbImageLibrary images={images} /> :
              <ShimmerThumbnail className="w-full " rounded />}
          </div>
          {/* The detail of product showing on the right side of div */}
          {location.state ? <div className="w-[70%] max-[614px]:w-[100%] p-[3%] gap-6 ">
            <h1 className="text-5xl Moderustic m-6">{location.state.title}</h1>
            <p className="Moderustic text-3xl m-6">Genre:&nbsp;<span className="text-2xl Moderustic">{location.state.category}</span></p>
            <p className="Moderustic text-3xl m-6">About the Game:</p>
            <p className="Moderustic text-2xl m-6">{location.state.description}</p>
            <p className="Moderustic text-2xl m-6">copies left:  &nbsp;({location.state.stock})</p>
            <p className="Moderustic text-5xl m-6">${location.state.price}</p>
            <div className="max-[550px]:hidden m-6">
                    <StarRatings
                        rating={parseInt(location.state.rating)}
                        starDimension="19px"
                        starSpacing="2px"
                        starRatedColor="#f1d900"
                    />
                </div>
                <div className="min-[550px]:hidden m-6">
                    <StarRatings
                        rating={parseInt(location.state.rating)}
                        starDimension="14px"
                        starSpacing="1px"
                        starRatedColor="#f1d900"
                    />
                </div>
            <button onClick={addToCart} className=" bg-indigo-600 hover:bg-indigo-700 w-[45%] text-white font-bold mt-2  ml-3 rounded h-[50px]">
              Add to cart
            </button>
            {loginUserData && loginUserData.email === location.state.email && <div className="flex items-center justify-center gap-[2%] w-[45%] py-[1%] ml-3">
            <button onClick={updateProduct} type="button" class="text-gray-900 p-[1%] w-[45%] bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
            <button onClick={deleteProduct} type="button" class="text-white p-[1%] w-[45%] bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
            </div>}
          </div> :
            <div className="w-[70%] p-[3%] gap-6 ">
              <ShimmerTitle line={2} gap={10} variant="primary" />
              <ShimmerText line={5} gap={10} />
            </div>
          }
        </div>
        {/* reviewsection */}
         
          {filterReview && filterReview.length > 0 &&
            <div className="w-[90%] bg-[#F9F9F8] flex justify-center flex-col p-[2%] m-[3%] dark:bg-[#1c1c20]  rounded-lg">
            <p className="hubot font-semibold  text-2xl text-blue-400">REVIEWS:- </p>
            {filterReview ? filterReview.map((reviews) => {
                return <>
                <div className="border-t-[1px] border-gray-800 dark:border-gray-500 w-[80%] p-[1%]">
                  <p className="text-lg IBM">{reviews.name}&nbsp;&nbsp;&nbsp;<span className="text-xl text-blue-400">verified purchase</span></p>
                  <p className="text-2xl IBM">{reviews.review}</p>
                </div>
              </>
            }) :
              <ShimmerPostDetails card cta variant="SIMPLE" />
            }
          </div>
          }
        
        <div className="m-[3%] w-full p-[2%]">
          {!wannaReview ? <button onClick={reviewSwitch} type="button" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
            Add your review
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button> :
            <button onClick={reviewSwitch} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Not now
            </button>
          }
          <div className={`w-full m-[3%] p-[2%] ${wannaReview && IsUserLogin ? "block" : "hidden"}`}>
            <form className="w-[70%] pr-[3%]">
              <div>
                <label for="first_name" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white m-[1%]">Customer name</label>
                <input onChange={(event) => { setReview(prev => ({ ...prev, name: event.target.value })) }} type="text" id="first_name" class="bg-gray-50 m-[1%] border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
              </div>
              <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white m-[1%]">Your review</label>
              <textarea onChange={(event) => { setReview(prev => ({ ...prev, review: event.target.value })) }} id="message" rows="4" class="block m-[1%] p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a review..."></textarea>
              <button onClick={reviewSubmit} type="button" class="text-white m-[1%] bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Here is the code about related products */}
        <div className="w-full bg-[#fcfcfc] dark:bg-[#101014] dark:text-white">
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