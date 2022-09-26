import { Box, Button } from '@chakra-ui/react'
import { Grid, GridItem ,Text,Flex} from '@chakra-ui/react'
import CaptionCarousel from './slickshoes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ToastExample } from './productdetailtoast';




export const ProductDetailComponent=({productdetail})=>{

    
    const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = productdetail;
    const settings = {
        dots: true,
         infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    //  f2f7f4

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
        {sizes.map((size)=> <Button key={size} colorScheme='teal' variant='outline'>{size}</Button>)}
    </Flex>

    <Box mt="20px">
    <Button colorScheme='yellow' width="600px">ADD TO CART</Button>

    </Box>

    
  </GridItem>  
        </>
    
    )
}
