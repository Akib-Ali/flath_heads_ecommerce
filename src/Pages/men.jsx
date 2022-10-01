import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getMenData } from "../Redux/Products/action"
import { useEffect } from "react"
import { Text } from "@chakra-ui/react"
import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem } from '@chakra-ui/react'

export const MenProduct=()=>{

    const dispatch = useDispatch()
    const allmenproducts = useSelector((state)=> state.product.menproducts)
   const loading = useSelector((state)=> state.product.loading)
   const error = useSelector((state)=>state.product.error)

   useEffect(() => {
       
    if(allmenproducts?.length === 0){
        dispatch(getMenData())
    }   
},[dispatch,allmenproducts.length])



console.log(allmenproducts)

    return(
        <div>
        <Text fontSize="2xl">MEN SHOES</Text>
            {/* {allmenproducts.map((elem)=> <h1> {elem.name}</h1>
            )} */}

            {
            loading ?
            <h1>Entities loading.....</h1>
            :error ?
            <h1>some thing wrong .please try again later</h1>
            :<Grid templateColumns="1fr 2fr" gap="4" border="9px solid purple">

            <Filter/>
            
            <Grid templateColumns='repeat(3, 1fr)' gap={6} border="4px solid blue" width="1000px">
             {allmenproducts.length > 0 && allmenproducts.map((item)=>{
                    return <ProductComponent key={item.id} {...item}/>
                })}
        

          
           </Grid>

           </Grid>
            } 

             
        </div>
    )
}