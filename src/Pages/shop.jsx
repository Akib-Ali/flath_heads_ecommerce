import { useEffect } from "react"
import {handeLoading,handleError,storeData} from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye

export const Shop=()=>{

    const dispatch = useDispatch()


    useEffect(()=>{

        fetch("https://doctor-patient123.herokuapp.com/products")
        .then((res)=> res.json())
        .then((res)=> dispatch(storeData(res)))                                                                 //pehle console.log(res)
        .catch(()=> dispatch(handleError()))
    },[])
    
    
    return(
        <h1>Shop Page</h1>
    )
}