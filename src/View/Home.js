import { useState } from "react";
import Product from "../Components/Product/Product";
const Home = () => {
    const [searchValue, setSearchValue] = useState(null)
    const searchedvalue = (valuefromsearchbar) => {
        setSearchValue(valuefromsearchbar.target.value.toLowerCase())
      }

    return(
        <>
         <div className="w-full p-6">
           <div className="w-full p-[1%] flex items-center justify-center">
             <input onChange={searchedvalue} type="text" id="search-navbar" class="block w-[70%] p-4  text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product ..." />
           </div>
           <Product searchValue={searchValue}/>
         </div>
        </>
    )
}
export default Home;