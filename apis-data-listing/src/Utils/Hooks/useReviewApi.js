import { useEffect, useState } from "react"
import axios from "axios";
const useReviewApi = () => {
    const Url = "http://localhost:5000/apis/"
    const [review, setReview] = useState(null)
  
    useEffect(() => {
        (async () => {
            const datas = await axios.get(`${Url}reviews/read`).catch(err => {
                console.log(err)
            })
            setReview(datas.data.data)
        })()}, [review])
    
    return review
}


export {useReviewApi}