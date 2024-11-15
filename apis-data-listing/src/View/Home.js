import { useState, useEffect } from "react";
import Product from "../Components/Product/Product";
import { useSelector, useDispatch } from "react-redux";
import Auth from "./Auth.js"

const Home = () => {
  const isUserLogin = useSelector((reducers) => reducers.isLogin)
  // All States here related search and filter by price
  const [searchAndFilter, setSearchAndFilter] = useState({
    searchValue:null,
    message:null,
    isFilter:false,
    rangeValue:null,
  })

  // Here we are using useEffect to delay message related to "out of stock" 
  useEffect(() => {
   setTimeout(() => {
    setSearchAndFilter((prevValues) => ({
      ...prevValues,
       message:"The product is not available"
      }))
    },2000)
 },[searchAndFilter.searchValue])

//  Here we are updating searched value
  const searchedvalue = (valuefromsearchbar) => {
    setSearchAndFilter((prevValues) => ({
      ...prevValues,
       searchValue:valuefromsearchbar.target.value.toLowerCase(), 
       message:null,
       isFilter:false,
       isSearch:true
      }))
  }

// Here we are updating range value
  const getRange = (rangevalue) => {
    console.log(rangevalue.target.value)
    console.log(searchAndFilter)
    setSearchAndFilter((prevValues) => ({
      ...prevValues,
       rangeValue:rangevalue.target.value,
       isFilter:false
      }))
  }
  // Here we are filtering by price on click
  const filterByPriceFunc = () => {
    setSearchAndFilter((prevValues) => ({
      ...prevValues,
       isFilter:true,
       searchValue:null
      }))
  }
  return (
    <>
        
        <div className="w-full min-h-screen p-6 dark:bg-[#101014] bg-[#F2F3F2] relative">
        <div className="w-full p-[1%] gap-[4%] flex max-[750px]:flex-col items-center justify-center">

          {/* The code below if for "SEARCHBAR" */}
          <input onChange={searchedvalue} type="text" id="search-navbar" className="mb-2 block w-[40%] max-[750px]:w-[90%] p-4  text-lg text-gray-900 border rounded-lg focus:border-blue-500 dark:focus:border-transparent dark:text-white dark:bg-[#1c1c20] bg-[#E5E6E4] dark:border-transparent" placeholder="Search Product ..." />
         
          {/* The code below if for "FILTER BY PRICE" */}
          <div className="w-[40%] max-[750px]:w-[80%] gap-[2%] p-[2%] flex items-center justify-center">
            <div className="w-full relative mb-6">
              <label for="labels-range-input" className="sr-only">Labels range</label>
              <input value={searchAndFilter.rangeValue} onChange={getRange} id="labels-range-input" type="range" min="1" max="2500" className="w-full mb-4 h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">$1</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$800</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1600</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">$2500</span>
            </div>
            <button onClick={filterByPriceFunc} className="sm:p-[1%] p-[2%] bg-indigo-500 hover:bg-indigo-600 min-[750px]:w-[50%] max-[750px]:w-[30%] text-white font-bold max-[500px]:font-semibold  ml-3 rounded-xl text-lg flex items-center justify-center shadow-xs transition-all duration-500">
             FILTER
            </button>
          </div>
        </div>
        <Product searchAndFilter={searchAndFilter} />
      </div>
      
    </>
  )
}
export default Home;