import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate  } from 'react-router-dom';

const Product = (prop) => {
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setData(res.data.products)
            }).catch(err => {
                console.log(err)
            })
    }, [])
   const filterValue = data && data.filter((e) => 
     e.category.toLowerCase().includes(prop.searchValue)
   
   )
   console.log(filterValue);
const goToDetail = (e) => {
    navigate("/detailpage", {state: e})
    console.log(e);
    
}
    return (
        <>
            <div className="w-full p-[1%] bg-[#fcfcfc]">
                <h1 className="text-3xl IBM p-[2%]">{prop.searchValue?"SEARCHED VALUE":"NEW PRODUCTS"}</h1>
                <div className="w-full p-[1%] flex flex-wrap  items-center gap-6">
                    {/* card */}
                    {prop.searchValue? filterValue.map((data) => {
                        return (
                            <>
                                <div onClick={() => goToDetail(data)} className="w-[23%] p-[1%] ">
                                    <div className="w-full px-[10%] py-[30%] bg-white rounded-xl zoom cursor-pointer"><img src={data.thumbnail} /></div>
                                    <h1 className="text-2l p-[1%] Moderustic">{data.title}</h1>
                                    <div> <span><strike className="Moderustic">$700&nbsp;</strike></span><span className="text-xl font-bold Moderustic">&nbsp;${data.price}</span></div>
                                    <div className="gap-6 p-[1%]">
                                        <span>ratings</span>
                                        <span className="Moderustic">({data.stock})</span>
                                    </div>
                                </div>
                            </>
                        )
                    }):data&&data.map((data) => {
                        return (
                            <>
                                <div onClick={() => goToDetail(data)} className="w-[23%] p-[1%] ">
                                    <div className="w-full px-[10%] py-[30%] bg-white rounded-xl zoom cursor-pointer"><img src={data.thumbnail} /></div>
                                    <h1 className="text-2l p-[1%] Moderustic">{data.title}</h1>
                                    <div> <span><strike className="Moderustic">$700&nbsp;</strike></span><span className="text-xl font-bold Moderustic">&nbsp;${data.price}</span></div>
                                    <div className="gap-6 p-[1%]">
                                        <span>ratings</span>
                                        <span className="Moderustic">({data.stock})</span>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default Product;
// onChange={searchedvalue}