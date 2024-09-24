import { useEffect, useState } from "react"
import axios from "axios";
const useApi = () => {
    const Url = "https://dummyjson.com"
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(`${Url}/products`)
            .then(res => {
                setData(res.data.products)
            })
    }, [])
    return data
}
export default useApi