import React from 'react';
import Slider from "react-slick";
import { Box, Button, Img, Spacer ,Text} from '@chakra-ui/react'

import {useDispatch} from "react-redux" 
export const PDASSlider=({productdetail})=>{
    const dispatch = useDispatch()
    
    const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = productdetail;


    const settings = {
        dots: true,
         infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    

    return(
        
        <Box width={["95%", "95%"]}  border="1px solid #FFABE1"   pl="20px" pr="10px" mt="60px">
        
         <Slider {...settings}>
         
        

          

          {images.map((img)=>{
                return <img src={img}/>
            })}
          
            

            

         
        </Slider> 


        </Box>

    )
}