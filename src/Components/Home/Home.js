import { useState } from "react";
import Product from "../Product/Product";
import Navbar from "../Navbar/Navbar";
const Home = () => {
    const [searchValue, setSearchValue] = useState(null)
    console.log(searchValue)

    return(
        <>
       <div className="w-full p-6">
        <Navbar setSearchValue={setSearchValue}/>
        <div className="trendBanner w-full px-[1%] py-[14%]"></div>
        <div className="w-full p-[1.5%] saleison"></div>
        <Product searchValue={searchValue}/>
       </div>
        
        </>
    )
}
export default Home