import {useApi} from "../../Utils/Hooks/UseApi/useApi";
import {useGetApi} from "../../Utils/Hooks/useGetApi";
import SearchedResult from "../SearchedResult";
import PriceRangeResult from "../PriceRangeResult";
import ShimmerApi from "../Shimmer/ShimmerApi/ShimmerApi";
import Card from '../Card';

const Product = (prop) => {
    // Here we calling API through "CUSTOM HOOK"
    const apiData = useApi()
    const apiGetData = useGetApi()

    return (
        <>
            <div className="w-full p-[1%] bg-[#fcfcfc] dark:bg-gray-900 dark:text-white">
            {/* Here we using condition between 3 headings related what the product is about */}
                <h1 className="text-3xl IBM p-[2%]">{prop.searchAndFilter.isFilter ? "FILTERED PRODUCTS" : prop.searchAndFilter.searchValue ? "SEARCHED VALUE" : "NEW PRODUCTS"}</h1>
                <div className="w-full p-[1%] flex flex-wrap justify-center items-center gap-6">
                    {/* card */}
                    {prop.searchAndFilter.isFilter ? <PriceRangeResult searchAndFilter={prop.searchAndFilter} /> : prop.searchAndFilter.searchValue ? <SearchedResult searchAndFilter={prop.searchAndFilter} /> : apiGetData ? apiGetData.map((data) => {
                        return (
                            <>
                                <Card data={data} />
                            </>
                        )
                    }) : <ShimmerApi />}
                </div>
            </div>
        </>
    )
}
export default Product;






