import useApi from "../Utils/Hooks/UseApi/useApi";
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
const PriceRangeResult = (prop) => {
    const apiData = useApi()
    // filter api's data
    const filterValue = apiData && apiData.filter((filteredEvent) =>
        {return filteredEvent.price < prop.range}
    )
    return (
        <>
            {apiData && filterValue.map((data) => {
                return (
                    <>
                      <Card data={data} />
                    </>
                )})}
        </>
    )
}
export default PriceRangeResult;