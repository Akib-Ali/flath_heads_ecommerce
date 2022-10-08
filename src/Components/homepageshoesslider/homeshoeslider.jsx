
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

export const HomeShoesSlider=(allitem)=>{

     const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = allitem;

    
    const settings = {
        dots: true,
        infinite: true,
       speed: 500,
        autoplay: true,

       slidesToShow: 2,
       slidesToScroll: 2
     };
    return (
       
        <Box width={["100%", "98%"]}    pl="20px" pr="10px" mt="60px" margin="auto">
        
        <Slider {...settings}>
        
        {allitem.map((allproducts)=>{
               return(
                <div className="imgcontrol">
                <h1>{allproducts.name}</h1>

                </div>

               ) 
           })}
         </Slider> 

    </Box>


    )
}