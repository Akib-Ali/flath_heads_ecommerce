import { useEffect } from "react"
import {getData} from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye
 import {useSelector} from "react-redux"
 import { Text } from "@chakra-ui/react"
import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem } from '@chakra-ui/react'


export const Shop=()=>{

    const dispatch = useDispatch()
   const products = useSelector((state)=> state.product.products)
   const loading = useSelector((state)=> state.product.loading)
   const error = useSelector((state)=>state.product.error)
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
            :<Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {products.length > 0 && products.map((item)=>{
                    return <ProductComponent key={item.id} {...item}/>
                })}
 
  
           </Grid>
            }
        </div>
    )
}