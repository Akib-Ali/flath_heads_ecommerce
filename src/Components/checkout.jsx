import { Stack,Box } from '@chakra-ui/react'
import CheckoutCard from './checkoutform'
import { CheckOutProduct } from './checkoutproduct'


export const Checkout=()=>{

    return(
        
      <Stack direction={['column', 'row']} spacing='24px' border="2px solid red" w="98%" margin="auto">

      <Box w={["100%" , "40%"]} border="1px solid grey">
      <CheckoutCard/>
      </Box>

      <Box w={["100%" , "60%"]} >
       <CheckOutProduct/>
      </Box>
 
</Stack>
    )




}