import {useGetApi} from "../Utils/Hooks/useGetApi";
import SearchedResult from "./SearchedResult";
import Card from "./Card";
const PriceRangeResult = (prop) => {
    // Calling api from custom hook
    const apiData = useGetApi()
    // filter api's data
    const filterValue = apiData && apiData.filter((filteredEvent) =>
        {return parseInt(filteredEvent.price) < prop.searchAndFilter.rangeValue}
    )
    console.log(filterValue)
    console.log(prop.searchAndFilter.rangeValue)
    return (
        <>
            {prop.searchAndFilter.searchValue ? <SearchedResult searchAndFilter={prop.searchAndFilter}/> : apiData &&  filterValue.map((data) => {
                return (
                    <>
                      <Card data={data} />
                    </>
                )})}
        </>
    )
}
export default PriceRangeResult;