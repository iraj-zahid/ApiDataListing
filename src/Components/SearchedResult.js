import useApi from "../Utils/Hooks/UseApi/useApi";
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
const SearchedResult = (prop) => {
    const navigate = useNavigate()
    const apiData = useApi()
    // filter apis data
    const filterValue = apiData && apiData.filter((filteredEvent) =>
        filteredEvent.title.toLowerCase().includes(prop.searchValue)
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
export default SearchedResult;