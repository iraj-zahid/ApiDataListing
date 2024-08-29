import useApi from "../../Hooks/UseApi/useApi";
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Card from "../Card/Card";
const SearchedResult = (prop) => {
    const navigate = useNavigate()
    const apiData = useApi()
    // filter apis data
    const filterValue = apiData && apiData.filter((e) =>
        e.category.toLowerCase().includes(prop.searchValue)
    )
    // navigate to deatil page func
    const goToDetail = (e) => {
        navigate("/detailpage", { state: e })
    }
    
    return(
        <>
       {apiData &&  filterValue.map((data) => {
                        return (
                            <>
                             <Card data={data}/>
                            </>
                        )
                    })}
        </>
    )
}
export default SearchedResult;