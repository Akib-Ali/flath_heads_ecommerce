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
import { SimpleGrid,Box,Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { Progress } from '@chakra-ui/react'

import {ChevronRightIcon } from '@chakra-ui/icons'

export const Shop=()=>{

    const dispatch = useDispatch()
   const products = useSelector((state)=> state.product.products)
   const loading = useSelector((state)=> state.product.loading)
   const error = useSelector((state)=>state.product.error)

     console.log(products)

     const [searchParams] = useSearchParams()


    useEffect(() => {
       
        if(products?.length === 0){
            dispatch(getData())
        }   
    },[dispatch,products.length])

    
    return(
        <div>
        
           <Box  ml={["15px", "150px"]} mt="50px">
              <Flex>
                 <Link to="/">Home  <ChevronRightIcon> </ChevronRightIcon></Link>
                 <Link to="/collections/all">Collection <ChevronRightIcon> </ChevronRightIcon></Link>
                 <Text opacity={0.5}>Shop All</Text>
              </Flex>
              <Text mt="20px" fontSize={"3xl"} fontWeight="400">Shop All</Text>
           </Box>
          

          {
            loading ?
          
            <Progress size='md' isIndeterminate  w="80%" margin={"auto"}/>
 
            :error ?
            <h1>some thing wrong .please try again later</h1>
            : <Stack direction={['column', 'row']} spacing='80px' border="0.5px solid grey" width={["95%", "83%"]} margin="auto" marginTop="100px">

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