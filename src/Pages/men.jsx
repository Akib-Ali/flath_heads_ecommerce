import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getMenData } from "../Redux/Products/action"
import { useEffect } from "react"
import { ProductComponent } from "../Components/product"
import { Grid, GridItem ,Text} from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { MenFilter } from "../Components/MenFilter"
import { Box,Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { Progress } from '@chakra-ui/react'

import {ChevronRightIcon } from '@chakra-ui/icons'

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
          <Box  ml={["15px", "150px"]} mt="50px">
              <Flex>
                 <Link to="/">Home  <ChevronRightIcon> </ChevronRightIcon></Link>
                 <Link to="/collections/all">Collection <ChevronRightIcon> </ChevronRightIcon></Link>
                 <Text opacity={0.5}>Shop Men</Text>
              </Flex>
              <Text mt="20px" fontSize={"3xl"} fontWeight="400">Shop Men</Text>
           </Box>
          
            

            {
            loading ?
            <Progress size='md' isIndeterminate  w="90%" margin={"auto"}/>
        
            :error ?
            <h1>some thing wrong .please try again later</h1>
            :<Stack direction={['column', 'row']} spacing='80px' border="0.5px solid grey" width={["95%", "83%"]} margin="auto" marginTop="100px">

             <MenFilter/> 
            
            <SimpleGrid columns={[1, null, 3]} spacing='40px'>
             {allmenproducts.length > 0 && allmenproducts.map((item)=>{
                    return <ProductComponent key={item.id} {...item}/>
                })}
        

          
           </SimpleGrid>

           </Stack>
            } 

             
        </div>
    )
}