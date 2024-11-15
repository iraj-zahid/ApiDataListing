import { useEffect, useState } from "react"
import axios from "axios";
const useUserDataApi = () => {
    const Url = "http://localhost:5000/apis/"
    const [userData, setUserData] = useState(null)
  
    useEffect(() => {
        (async () => {
            const datas = await axios.get(`${Url}usersData/read`).catch(err => {
                console.log(err)
            })
            datas && setUserData(datas.data.data)
        })()}, [userData])
    
    return userData
}


export {useUserDataApi}