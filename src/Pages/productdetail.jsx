import { useEffect } from "react"
import { getCurrentProductData } from "../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye
 import {useSelector} from "react-redux"
 import { Text } from "@chakra-ui/react"
import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { ProductDetailComponent } from "../Components/productdetailcomponent"
import { Box} from '@chakra-ui/react'


export const ProductDetail=()=>{

    const dispatch = useDispatch()
   const currentproduct = useSelector((state)=> state. currentProduct)
   const loading = useSelector((state)=> state.loading)
   const error = useSelector((state)=>state.error)
   console.log(currentproduct)


   const {id} = useParams()



    useEffect(() => {
       
        if(id){
            dispatch(getCurrentProductData(id))
        }   
    },[dispatch,id])

    if(loading){
        return <h1>Loading.....</h1>

    }
    if(error){
        return <h1>Some Thing went wrong</h1>

    }

    if(Object.keys(currentproduct).length === 0){
        return <h2>Product {id}  not found</h2>

    }
   
    
    console.log(currentproduct)
       

    
    return(
    
 <Grid templateColumns='repeat(2, 1fr)' gap={6} width="1250px" margin="auto" mt="70px" border="2px solid blue" height="500px">

    
  <ProductDetailComponent productdetail={currentproduct}/>
  

</Grid>
     )
}