
 import React from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux"
import { Box ,Text,Button} from '@chakra-ui/react';
import { Stack, HStack, VStack,Flex } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { WhyFlatheads } from './whyflatheads';
import { Videofeatures } from '../Components/Video/videoorlogo';
import { CustomerReview } from '../Components/customerreviews';


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


           
           <Box width="99%" border="1px solid #EDEDED" height={["80%" , "20%"]} margin="auto" mt="100px" backgroundColor="#EDEDED">
            <CustomerReview/>
           </Box>

           <Box width={["99%" , "90%"]} margin="auto">
            <Videofeatures/>
           </Box>

              
      </Box>
      
    )
}