import { Box } from '@chakra-ui/react'
import { Grid, GridItem ,Text} from '@chakra-ui/react'
import SimpleSlider from './slickshoes';
import React, { Component } from "react";
import Slider from "react-slick";
export const ProductDetailComponent=({productdetail})=>{

    // const allshows = [productdetail.images[0]]
    const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = productdetail;

    // render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    return(
       
        <>
    <GridItem  bg='orange.300'  p="120px">
    
    <img src={images}/> 
    

   

  </GridItem>

   <GridItem  bg='orange.300' >                                  {/* iind box */}
    <Text fontSize="4xl" fontWeight={600}>{name +" " + "|" +" " + color + " " + "|" + " " +gender  } </Text>
     <Text fontSize="2xl" fontWeight={400}>Rs {final_price}</Text> 
     <Text>Inclusive of all taxes</Text>
     <Text>Color</Text>
    <Text fontSize="xl" fontWeight={700} color="grey">Choose a Size</Text>
    
  </GridItem> 
        </>
    
    )
}
