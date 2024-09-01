import { useState } from "react";
import Product from "../Product/Product";
const Home = () => {
    const [searchValue, setSearchValue] = useState(null)
    console.log(searchValue)
    const searchedvalue = (e) => {
        setSearchValue(e.target.value.toLowerCase())
      }

    return(
        <>
       <div className="w-full p-6">
        <div className="w-full p-[1%] flex items-center justify-center">
        <input onChange={searchedvalue} type="text" id="search-navbar" class="block w-[70%] p-4  text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product ..." />
        </div>
        <div className="trendBanner w-full px-[1%] py-[14%]"></div>
        <div className="w-full p-[1.5%] saleison"></div>
        <Product searchValue={searchValue}/>
       </div>
        
        </>
    )
}
export default Home