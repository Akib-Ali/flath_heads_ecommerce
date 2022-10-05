import { Box, Button } from '@chakra-ui/react'
import { Grid, GridItem ,Text,Flex} from '@chakra-ui/react'
import CaptionCarousel from './slickshoes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastExample } from './productdetailtoast';
import { useState } from 'react';
import { addTOCart } from '../Redux/Cart/action';
import {useDispatch} from "react-redux" 
import { Stack, HStack, VStack,SimpleGrid } from '@chakra-ui/react'




export const ProductDetailComponent=({productdetail})=>{

  const dispatch = useDispatch()
    
    const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = productdetail;

    const [size,setsize]= useState(null)

    const settings = {
        dots: true,
         infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    


    const handleCart=()=>{
      let payload ={
        ...productdetail,
        size
      }
      // console.log(payload)
      dispatch(addTOCart(payload))
    }

    return(
       
      
    <Stack direction={['column', 'row']} spacing='35px'>

    {/* left */}

    <Box width={["95%", "40%"]} border="2px solid pink"   pl="20px" pr="10px">
        
         <Slider {...settings}>
         
         {images.map((img)=>{
             return  <img src={img} />
         })}
        </Slider> 
      </Box>

    



  {/* end left */}

  {/* right box  backgroundColor="#FFF5E4*/}

    <Box  padding={["20px"]} >                                  {/* iind box */}
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

    
  </Box>  

  {/* rigt box end */}
  </Stack>
      
    
    )
}
