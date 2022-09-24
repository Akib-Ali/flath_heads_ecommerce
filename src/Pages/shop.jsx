import { useEffect } from "react"
import {handeLoading,handleError,storeData, getData} from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye
 import {useSelector} from "react-redux"
 import { Text } from "@chakra-ui/react"
import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"


export const Shop=()=>{

    const dispatch = useDispatch()
   const products = useSelector((state)=> state.products)
   const loading = useSelector((state)=> state.loading)
   const error = useSelector((state)=>state.error)
   console.log(products)


    useEffect(() => {
       
        if(products?.length === 0){
            dispatch(getData())
        }   
    },[dispatch,products.length])
    
    
    return(
        <div>
         <Text fontSize="2xl">Shop All</Text>
          <Filter/>

          {
            loading ?
            <h1>Entities loading.....</h1>
            :error ?
            <h1>some thing wrong .please try again later</h1>
            :<div>
                {products.length > 0 && products.map((item)=>{
                    return <ProductComponent key={item.id} {...item}/>
                })}
             </div>
            }
        </div>
    )
}