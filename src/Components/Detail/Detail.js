import { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import FbImageLibrary from 'react-fb-image-grid'
import { useLocation } from "react-router-dom"
import axios from "axios";


const Detail = () => {
    const location = useLocation()
    const [data, setData] = useState(null)
    
    useEffect(() => {
    setData(location.state)
            
    }, [])
//    const filterValue = data && data.filter((e) => 
//      e.category.toLowerCase().includes(location.state.category)
   
//    )
console.log(data);

    return(
        <>
        <div className="w-full p-[3%] ">
            <div className="w-full p-[2%] flex  justify-center">
                <div className="w-[40%] p-[1%] ">
                <FbImageLibrary  images={location.state.images}/>
                </div>
               {data&& <div className="w-[50%] p-[3%] gap-6 ">
                <h1 className="text-5xl Moderustic m-6">{data.title}</h1>
                <p className="Moderustic text-3xl m-6">Category:{data.category}</p>
                <p className="Moderustic text-3xl m-6">About the product</p>
                <p className="Moderustic text-2xl m-6">{data.description}</p>
                <p className="Moderustic text-5xl m-6">${data.price}</p>
                <button className=" bg-[#c300ffd5] hover:bg-[#71009e] w-[200px] text-white font-bold mt-2  ml-3 rounded h-[55px]">
                       Add to cart
                    </button>
                </div>}
            </div>
        </div>
        </>
    )
}
export default Detail