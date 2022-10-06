
 import React from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux"
import { Box ,Text,Button} from '@chakra-ui/react';
import { Stack, HStack, VStack,Flex } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { WhyFlatheads } from './whyflatheads';


export const Home=()=>{

    const data = useSelector((state) => state.products)

    const settings = {
        dots: true,
         infinite: true,
        speed: 500,
        // autoplay: true,

        slidesToShow: 2,
        slidesToScroll: 1
      };



    
    return(
        
        <Box>


           <Box>
            <WhyFlatheads/>
           </Box>
              
      </Box>
      
    )
}