import { useEffect } from "react"
import {handeLoading,handleError,storeData, getData} from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye

export const Shop=()=>{

    const dispatch = useDispatch()


    useEffect(() => {
        
   dispatch(getData())
    },[])
    
    
    return(
        <h1>Shop Page</h1>
    )
}