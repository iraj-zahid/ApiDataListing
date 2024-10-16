import { useEffect, useState } from "react"
import axios from "axios";
const useApi = () => {
    const UrlTwo = "http://localhost:5000/apis/products/read"
    const Url = "https://dummyjson.com"
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`${Url}/products`)
            .then(res => {
                setData(res.data.products)
                console.log(res.data.products)
            })
    }, [])
    // useEffect(() => {
    //     (async () => {
    //         const datas = await axios.get('http://localhost:5000/apis/products/read').catch(err => {
    //             console.log(err)
    //         })
    //         console.log(datas)
    //     })()}, [])
    
    return data
}


export {useApi}