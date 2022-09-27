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
       
        <>
    <GridItem style={{backgroundColor:"#f5f5f5"}}>

    <div style={{width:"450px" ,paddingleft:"50px",margin:"auto"}} key={images[id]}>
        
        <Slider {...settings}>
         
         {images.map((img)=>{
             return  <img src={img}/>
         })}
        </Slider>
      </div>

    {/* <CaptionCarousel/> */}

  </GridItem>

    <GridItem  bg='orange.300' >                                  {/* iind box */}
    <Text fontSize="4xl" fontWeight={600}>{name +" " + "|" +" " + color + " " + "|" + " " +gender  } </Text>
     <Text fontSize="2xl" fontWeight={400}>Rs {final_price}</Text> 
     <Text>Inclusive of all taxes</Text>
     <Text>Color</Text>

     <Flex gap="30px">
        <Text>SELECT THE SIZE  </Text>
        <ToastExample/>
     </Flex>


    <Text fontSize="xl" fontWeight={700} color="grey">Choose a Size</Text>

    <Flex gap={"20px"} mt="10px">
        {sizes.map((size)=> <Button key={size} colorScheme='teal' variant='outline' onClick={() => setsize(size)}>{size}</Button>)}
    </Flex>

    <Box mt="20px">

    <Button colorScheme='yellow' width="600px" disabled={!size} onClick={handleCart}>
    {!size ? "Please seleact a size" : "ADD TO CART"}
    </Button>

    </Box>

    
  </GridItem>  
        </>
    
    )
}
