import { Box , Text,Stack,Flex} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import productDetailpage_image from "../Components/Video/productDetailpage_image.webp"
export const ProductdetailComIIND=()=>{
    return(
        <Box mt="100px">

           <Text fontWeight={800}> Banana Fiber Sneakers.</Text>
           <Text>First in the world, banana fiber shoes styled with vegan leather for a soft, breathable and smooth feel on your skin.</Text>

           <Stack direction={['column', 'row']} spacing='100px' mt="25px">

           <Box>
           
      <Image boxSize='500px' src={productDetailpage_image} alt='Dan Abramov' />

           </Box>


             {/* right box */}
           <Box padding="20px">
            
             <Box>
                <Flex gap="5px">
                    <Text fontWeight={800}>Upper Material :</Text>
                    <Text>Banana Stream Fiber</Text>
                </Flex>

                <Flex gap="5px">
                    <Text fontWeight={800}>Insoles :</Text>
                    <Text>Cushiony PU Foam</Text>
                </Flex>

                <Flex gap="5px">
                    <Text fontWeight={800}>Weight :</Text>
                    <Text>Super Lightweight</Text>
                </Flex>

                <Flex gap="5px">
                    <Text fontWeight={800}>Pair With :</Text>
                    <Text>Casual & Dressy Casual Attire</Text>
                </Flex>
             </Box>


             <Box mt="40px">
                <Text fontWeight={700} mb="20px">Shipping policy:</Text>
                <ul>
                    <li>Delivery usually take 8-10 working days depending on your location:</li>
                </ul>

                <Text fontWeight={700} mb="20px" mt="20px">Exchanges and Returns Policy:</Text>
                <ul>
                    <li>Free exchanges and returns for 7 days from date of delivery for unused shoes with tags intact.
                </li>
                </ul>

                <Text mt="20px">Write to us at rescue@flatheads.in with your order ID</Text>
             </Box>
           </Box>

           </Stack>

        </Box>
    )
}