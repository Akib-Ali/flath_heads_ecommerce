import { useSelector , useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { Flex ,Text} from '@chakra-ui/react'
import { Center, Square, Circle , Grid, GridItem} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { json } from 'react-router-dom'


export const CheckOutProduct=()=>{

    const cart = useSelector((state) => state.cart.cart)
    console.log(cart)

    let convertToNumber=(str)=>{
        if(Number(str)){
        return Number(str)
        }
        let arr = str.includes(",") ? str.split(",") : []
        let final_str = arr.reduce((a,c)=> a+c, "")
        let result = Number(final_str)
        return result
        }
    
       let total_final_price = 0;
       cart.forEach((prod)=>{
        total_final_price+= convertToNumber(prod.final_price) * prod.qty;
        localStorage.setItem("totalprice",JSON.stringify(total_final_price))
       })
    
    
 

    return(
        <Box  minHeight={"700px"}>

         {cart.length > 0 && cart.map((item)=>{
            return(

            <SimpleGrid columns={[1, null, 3]}  spacing={["10px","30px"]} mt="35px">

               
              <Flex gap={["20px" ,"60px"]}  width={"200px"} margin={["auto", "0px"]}>
              <img src={item.images[0]} height="100px" width={"100px"}/>
              <Circle size='25px' bg='yellow'  color='white'>
              <Text>{item.size}</Text>
              </Circle>
              </Flex>


              <Box  width={"300px"} margin={["auto", "0px"]}>
              <Text textAlign={"center"} pt="10px">{`${item.name} | ${item.color} | ${item.gender}` }</Text>
              </Box>
                
                   
                   

                     
                
                

                <Flex gap="20px"  width="70%" margin={["auto" ,"0px"]} pt="10px">
                <Text ml="20px"> {`quantity :${item.qty}`}</Text>
                <Text color="#FF884B" fontWeight={"500"} fontSize="md"> {`Rs ${item.final_price}`}</Text>
                </Flex>
              
            
                </SimpleGrid>
                       
                     
    

                
                    
            
    

            )
         })}
  
         <Flex width={["80%","50%"]} ml={["10%" ,"40%"]} mt="300px" justifyContent={"space-around"} alignItems="center">
           <Box>
           <Text fontWeight={"400"}>SubTotal</Text>
           <Text fontSize={"sm"}>Shipping ?</Text>

           </Box>
            <Box>
            <Text fontWeight={"400"} fontSize="md"> Rs {total_final_price}</Text>
            <Text fontSize={"sm"}>Calculated as next step</Text>

            </Box>
           
           </Flex>



           <Flex  width={["80%","50%"]} ml={["10%" ,"40%"]} mt="50px" justifyContent={"space-around"} alignItems="center">
           <Box>
           <Text fontWeight={"600"}>Total</Text>
           <Text fontSize={"x-small"}>Including Rs 809.01 in taxes</Text>

           </Box>
        
           <Text fontWeight={"700"} fontSize="xl"> Rs {total_final_price}</Text>
           </Flex>

        </Box>
    )
}
