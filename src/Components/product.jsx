import { Box ,Image,Text,Flex} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import "./product.css"

export const ProductComponent=(item)=>{

      const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = item;
      const [img,setImg]= useState(images[0])

      const navigate = useNavigate()

      const mouseenterimage=()=>{
        setImg(images[1])
    
      }


      const mouseremoveimage=()=>{
        setImg(images[0])
      }
      

    return(
        <Box  p={4} color='white' onMouseEnter={mouseenterimage} onMouseLeave={mouseremoveimage}
         border="2px solid red"
         onClick={()=> navigate(`/collections/all/${id}`)}
        >
        <Image  boxSize='200px' src={img}  alt={`Shoes ${name}`}/>
        <Text color='black'>{name +" " + "|" +" " + color +" " +"|" + " " +gender}</Text>
        <Flex gap='2'>
            <Text color='black'>Rs {final_price}</Text>
            <Text as='s' color="grey">{original_price}</Text>
        </Flex>
      </Box>

    )
}