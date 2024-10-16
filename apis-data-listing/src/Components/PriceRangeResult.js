import {useApi} from "../Utils/Hooks/UseApi/useApi";
import SearchedResult from "./SearchedResult";
import Card from "./Card";
const PriceRangeResult = (prop) => {
    // Calling api from custom hook
    const apiData = useApi()
    // filter api's data
    const filterValue = apiData && apiData.filter((filteredEvent) =>
        {return filteredEvent.price < prop.searchAndFilter.rangeValue}
    )
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