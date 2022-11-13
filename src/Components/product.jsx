import { Box ,Image,Text,Flex} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {Rating} from "@chakra-ui/raect"
import { SimpleGrid } from '@chakra-ui/react'

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
// import "./product.css"

export const ProductComponent=(item)=>{

      const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = item;
      const [img,setImg]= useState(images[1])

      const navigate = useNavigate()

      const mouseenterimage=()=>{
        setImg(images[0])
    
      }


      const mouseremoveimage=()=>{
         setImg(images[1])
           
      }
      

    return(
      
        <Box  height="320px" width="95%"  color='white' onMouseEnter={mouseenterimage} onMouseLeave={mouseremoveimage}
         
         onClick={()=> navigate(`/collections/all/${id}`)}
        >
        <Image  boxSize='200px' src={img}  alt={`Shoes ${name}`}/>
        <Text color='black'>{name +" " + "|" +" " + color +" " +"|" + " " +gender}</Text>

          {/* <Text color='black'>{rating}</Text> */}
          {/* <Box>{rating({ rating: Number(rating) })}</Box> */}


        <Flex gap='2'>
            <Text color='black'>Rs {final_price}</Text>
            <Text as='s' color="grey">{original_price}</Text>
        </Flex>
      </Box>


    )
}