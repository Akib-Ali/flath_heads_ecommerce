import { useEffect } from "react"
import {getData} from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye
 import {useSelector} from "react-redux"
 import { Text } from "@chakra-ui/react"
import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"


export const Shop=()=>{

    const dispatch = useDispatch()
   const products = useSelector((state)=> state.product.products)
   const loading = useSelector((state)=> state.product.loading)
   const error = useSelector((state)=>state.product.error)
     console.log(products)

     const [searchParams] = useSearchParams()


    useEffect(() => {
       
    //     if(products?.length === 0){
    //         dispatch(getData())
    //     }   
    // },[dispatch,products.length])

    if(products?.length===0){
        let params={
            gender:searchParams.getAll("gender")
        }
        dispatch(getData(params))
    }
    
    },[dispatch,products?.length,searchParams])
    
    return(
        <div>
           <Text fontSize="2xl">Shop All</Text>
          

          {
            loading ?
            <h1>Entities loading.....</h1>
            :error ?
            <h1>some thing wrong .please try again later</h1>
            :<Grid templateColumns="1fr 2fr" gap="4" border="9px solid purple">

            <Filter/>
            
            <Grid templateColumns='repeat(3, 1fr)' gap={6} border="4px solid blue" width="1000px">
             {products.length > 0 && products.map((item)=>{
                    return <ProductComponent key={item.id} {...item}/>
                })}
        

          
           </Grid>

           </Grid>
            } 

             
             
        </div>
    )
}