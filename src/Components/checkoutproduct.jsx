import { useSelector , useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'
import { Flex ,Text} from '@chakra-ui/react'

export const CheckOutProduct=()=>{

    const cart = useSelector((state) => state.cart.cart)
    console.log(cart)
 

    return(
        <Box>
         {cart.length > 0 && cart.map((item)=>{
            return(

                <Box>
                    <Flex>
                     <img src={item.images[0]}/>
                      <Text>{item.name}</Text>

                    </Flex>
                </Box>

            )
         })}

         

        </Box>
    )
}
