import { useEffect } from "react"
import { getCurrentProductData } from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye
 import {useSelector} from "react-redux"
 import { Text } from "@chakra-ui/react"
// import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { ProductDetailComponent } from "../Components/productdetailcomponent"
import { Box} from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { ProductdetailComIIND } from "../Components/productdetailcomIIndpart"
import { PDASSlider } from "../Components/productdetailallshoeSlider"

import { Progress } from '@chakra-ui/react'


export const ProductDetail=()=>{

    const dispatch = useDispatch()
   const currentproduct = useSelector((state)=> state.product.currentProduct)
   const loading = useSelector((state)=> state.product.loading)
   const error = useSelector((state)=>state.product.error)
   console.log(currentproduct)


   const {id} = useParams()



    useEffect(() => {
       
        if(id){
            dispatch(getCurrentProductData(id))
        }   
    },[dispatch,id])

    if(loading){
        return   <Progress size='md' isIndeterminate  w="80%" margin={"auto"}/>

    }
    if(error){
        return <h1>Some Thing went wrong</h1>

    }

    if(Object.keys(currentproduct).length === 0){
        return <h2>Product {id}  not found</h2>

    }
   
    
    console.log(currentproduct)
       

    
    return(
    

  <Box  width={["95%" , "75%"]} margin="auto" mt="50px" mb="50px">
    
  <ProductDetailComponent productdetail={currentproduct}/>
  <ProductdetailComIIND/>
  <PDASSlider productdetail={currentproduct}/>
  </Box>
  


     )
}