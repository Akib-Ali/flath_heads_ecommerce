import React from 'react';
import { Box, Button, Spacer } from '@chakra-ui/react'
import { Grid, GridItem ,Text,Flex} from '@chakra-ui/react'
// import CaptionCarousel from './slickshoes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastExample } from './productdetailtoast';
import { useState } from 'react';
import { addTOCart } from '../Redux/Cart/action';
import {useDispatch} from "react-redux" 
import { useDisclosure } from '@chakra-ui/react';
import { Stack, HStack, VStack,SimpleGrid } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'







export const ProductDetailComponent=({productdetail})=>{

  const dispatch = useDispatch()
    
    const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = productdetail;

    const [size,setsize]= useState(null)

    const handleCart=()=>{
      let payload ={
        ...productdetail,
        size
      }
      // console.log(payload)
      dispatch(addTOCart(payload))
    }

    const settings = {
        dots: true,
         infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    
      const settings2 ={
        dots: true,
         infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay:true
        
      }


const { isOpen, onOpen, onClose } = useDisclosure()
const finalRef = React.useRef(null)



    

    return(
       
      
    <Stack direction={['column', 'row']} spacing='35px'>

    {/* left */}

    <Box width={["95%", "40%"]}     pl="20px" pr="10px">
        
         <Slider {...settings}>
         
         {images.map((img)=>{
             return  <img src={img} />
         })}
        </Slider> 


        <Box>
        
          <Slider {...settings2}>
          
          {images.map((img)=>{
            return <Flex  gap="2">  <img src={img}/></Flex>
          })}
          
          
          </Slider>
          
         
        </Box>



      </Box>

    



  

  {/* right box  backgroundColor="#FFF5E4*/}

    <Box  padding={["20px"]} >                              
    <Text fontSize={["2xl", "4xl"]} fontWeight={600} >{name +" " + "|" +" " + color + " " + "|" + " " +gender  } </Text>
    
     <Text fontSize="2xl" fontWeight={400} color="#7a877d" mt="12px">Rs {final_price}</Text> 
     <Text mt="10px">Inclusive of all taxes</Text>
     <Text mt="5px">Color</Text>

     <Flex gap="30px" mt="10px">
        <Text>SELECT THE SIZE  </Text>
        <ToastExample/>
     </Flex>


    <Text fontSize="xl" fontWeight={700} color="grey" mt="20px">Choose a Size</Text>

    <SimpleGrid columns={[3, null, 6]} spacing='30px' mt="20px">
        {sizes.map((size)=> 
        <Button width="80px" key={size} colorScheme='teal' variant='outline' onClick={() => setsize(size)}>
        {size}
        </Button>
        )}
    </SimpleGrid>

    <Box mt="20px">
    <Button colorScheme='yellow' width="100%" disabled={!size} onClick={handleCart} mt="25px">
    {!size ? "Please seleact a size" : "ADD TO CART"}
    </Button>
   </Box>

     <Text fontSize="xl" mt="20px">Use Simple Pay in 3 interest free payments</Text>
     <Text fontSize="xl" mt="15px">Free 7 day return exchange</Text>
     <Flex gap="30px" mt="10px">
     <Text fontSize="xl" mt="15px">View COD Terms  & condition</Text>
     <Button colorScheme='red' variant='link' fontSize="20px" onClick={onOpen}>Click here</Button>
     </Flex>

     {/* modal */}
    <Box>
     <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
          Some other content that'll receive focus on close.
        </Box>
  
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="3xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>All Terms & Conditions !</ModalHeader>
            <ModalCloseButton />
            <ModalBody >

             <Text>
             ✓ Cash on delivery is only serviceable in specific cities and pin codes. You can check if your location is eligible for COD via the availability checker above.
             </Text>

           <Text mt="10px">
             ✓  In case of COD orders, order confirmation will be required from the recipient over call. Orders will not be dispatched until phone confirmation is completed.
           </Text>

           <Text mt="10px">
           ✓  COD payment can be accepted by cash or credit/debit card. E-vouchers, store credit or foreign currency cannot be accepted as mode of payment.
          </Text>
          <Text mt="10px">
          ✓  For COD orders refunds will be provided via store credit equivalent to the total order value. We cannot refund the amount by any other method, such as UPI or bank transfer. Shipping fee for COD order is non-refundable.
         </Text>

         <Text mt="10px">
         ✓  Any dispute arising due to COD is subject to the jurisdiction of Bangalore, Karnataka.
         </Text>
            </ModalBody>
  
            <ModalFooter>
             
              Please Follow All Terms and conditions
            </ModalFooter>
          </ModalContent>
        </Modal> 
        
        </Box>

        {/* model*/}
   
     

    
  </Box>  

  
  </Stack>
      
    
    )
}
