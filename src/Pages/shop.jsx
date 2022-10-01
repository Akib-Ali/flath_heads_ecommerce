import { useEffect } from "react"
import {getData} from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye
 import {useSelector} from "react-redux"
 import { Text } from "@chakra-ui/react"
import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'

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
           {/* <Text fontSize="2xl">Shop All</Text> */}
          

          {
            loading ?
            <h1>Entities loading.....</h1>
            :error ?
            <h1>some thing wrong .please try again later</h1>
            : <Stack direction={['column', 'row']} spacing='24px' border="4px solid blue" width="80%" margin="auto" marginTop="100px">

            <Filter/>
            
            <SimpleGrid columns={[1, null, 3]} spacing='40px'>
             {products.length > 0 && products.map((item)=>{
                    return <ProductComponent key={item.id} {...item}/>
                })}
        

          
           </SimpleGrid>
           

            </Stack> 
            } 

             
             
        </div>
    )
}