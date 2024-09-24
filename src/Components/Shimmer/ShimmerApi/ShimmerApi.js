import { useEffect, useState } from "react"
import { ShimmerThumbnail, ShimmerTitle, ShimmerText, ShimmerPostDetails } from "react-shimmer-effects";

const ShimmerApi = () => {
    const [shimmerApiData, setShimmerApiData] = useState([1, 2, 3, 4, 5, 6, 7, 8])

    return (
        <>
            {
                shimmerApiData.map((event) => {
                    return (
                        <>
                            <div className="w-[23%] max-[614px]:w-[30%] p-[1%] ">
                                <ShimmerThumbnail className="w-full px-[10%] py-[30%] bg-white rounded-xl zoom cursor-pointer" rounded />
                                <ShimmerTitle line={2} gap={10} variant="primary" />
                                <ShimmerText line={5} gap={10} />
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
export default ShimmerApi;
