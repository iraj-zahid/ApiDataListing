import { useState } from "react";
import Product from "../Components/Product/Product";
const Home = () => {
  const [allState, setAllState] = useState({
    range:null,
    searchValue:null
  })
  const searchedvalue = (valuefromsearchbar) => {
    setAllState((e) => ({
      ...e,
      searchValue:valuefromsearchbar.target.value.toLowerCase()
    }))
  }
  const getRange = (rangeValue) => {
    setAllState((e) => ({
      ...e,
      range:rangeValue.target.value
    }))
  }
  
  return (
    <>
      <div className="w-full min-h-screen p-6 dark:bg-gray-900">
        <div className="w-full p-[1%] gap-[4%] flex max-[750px]:flex-col items-center justify-center">
          <input onChange={searchedvalue} type="text" id="search-navbar" className="mb-2 block w-[40%] max-[750px]:w-[90%] p-4  text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500 dark:focus:border-transparent dark:text-white dark:bg-gray-700 dark:border-transparent" placeholder="Search Product ..." />
          <div className="w-[40%] max-[750px]:w-[80%] gap-[2%] p-[2%] flex items-center justify-center">
            <div className="w-full relative mb-6">
              <label for="labels-range-input" className="sr-only">Labels range</label>
              <input value={allState.range} onChange={getRange} id="labels-range-input" type="range" min="5" max="2500" className="w-full mb-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($1)</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$800</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1600</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($2500)</span>
            </div>
          </div>
        </div>
        <Product searchValue={allState.searchValue} range={allState.range} />
      </div>
    </>
  )
}
export default Home;