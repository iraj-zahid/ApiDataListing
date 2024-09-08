import { useEffect, useState } from "react"
import axios from "axios";
const useApi = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setData(res.data.products)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return data
}
export default useApi