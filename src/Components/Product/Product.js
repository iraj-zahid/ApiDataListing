import useApi from "../../Utils/Hooks/UseApi/useApi";
import SearchedResult from "../SearchedResult";
import PriceRangeResult from "../PriceRangeResult";
import ShimmerApi from "../Shimmer/ShimmerApi/ShimmerApi";
import Card from '../Card';

const Product = (prop) => {
    const apiData = useApi()
    // navigate to detailpage

    return (
        <>
            <div className="w-full p-[1%] bg-[#fcfcfc] dark:bg-gray-900 dark:text-white">
                <h1 className="text-3xl IBM p-[2%]">{prop.searchValue ? "SEARCHED VALUE" : "NEW PRODUCTS"}</h1>
                <div className="w-full p-[1%] flex flex-wrap justify-center items-center gap-6">
                    {/* card */}
                    {prop.range? <PriceRangeResult range={prop.range}/> : prop.searchValue ? <SearchedResult searchValue={prop.searchValue} /> : apiData ? apiData.map((data) => {
                        return (
                            <>
                               <Card data={data}/>
                            </>
                        )
                    }): <ShimmerApi/>}

                </div>
            </div>
        </>
    )
}
export default Product;






