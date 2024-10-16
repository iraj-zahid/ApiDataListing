import {useApi} from "../Utils/Hooks/UseApi/useApi";
import PriceRangeResult from "./PriceRangeResult";
import Card from "./Card";

const SearchedResult = (prop) => {
    // the hook for fetching API's data
    const apiData = useApi()
    // filter apis data
    let filterValue = apiData && apiData.filter((filteredEvent) =>
        filteredEvent.title.toLowerCase().includes(prop.searchAndFilter.searchValue)
    )
    
    return (
        <>
            {prop.searchAndFilter.isFilter? <PriceRangeResult  searchAndFilter={prop.searchAndFilter}/>:
            filterValue && filterValue.length > 0 ? filterValue.map((data) => {
                return (
                    <>
                      <Card data={data} />
                    </>
                )}):<p className="text-white text-4xl font-bold">{prop.searchAndFilter.message}</p>
            }
        </>
    )
}
export default SearchedResult;