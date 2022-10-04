import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getWomenData } from "../Redux/Products/action"
import { useEffect } from "react"
import { Text } from "@chakra-ui/react"
import { Filter } from "../Components/Filter"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem } from '@chakra-ui/react'

export const WomenProduct=()=>{
    
        
        const dispatch = useDispatch()
        const allwomenproducts = useSelector((state)=> state.product.womenproducts)
       const loading = useSelector((state)=> state.product.loading)
       const error = useSelector((state)=>state.product.error)
    
       useEffect(() => {
           
        if(allwomenproducts?.length === 0){
            dispatch(getWomenData())
        }   
    },[dispatch,allwomenproducts.length])
    
    
    
    console.log(allwomenproducts)
    
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
                 {allwomenproducts.length > 0 && allwomenproducts.map((item)=>{
                        return <ProductComponent key={item.id} {...item}/>
                    })}
            
    
              
               </Grid>
    
               </Grid>
                } 
    
                 
            </div>
        
    )
}