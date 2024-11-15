import { useEffect, useState } from "react"
import axios from "axios";
const useGetApi = () => {
    const Url = "http://localhost:5000/apis/"
    const [product, setProduct] = useState(null)
  
    useEffect(() => {
        (async () => {
            const datas = await axios.get(`${Url}products/read`).catch(err => {
            })
            datas && setProduct(datas.data.data)
        })()}, [])
    
    return product
}


export {useGetApi}