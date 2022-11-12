import { useEffect } from "react"
import { getData } from "../../Redux/Products/action"
 import {useDispatch} from "react-redux"                   //data ko redux m send k liye
 import {useSelector} from "react-redux"
 import { Stack,SimpleGrid,Box,Text} from "@chakra-ui/react"
 
import { Progress } from '@chakra-ui/react'

import Slider from "react-slick";

import { useNavigate } from 'react-router-dom';


export const HomeAllShoes=()=>{

    const dispatch = useDispatch()
    const allproducts = useSelector((state)=> state.product.products)
    const loading = useSelector((state)=> state.product.loading)
    const error = useSelector((state)=>state.product.error)

    const navigate = useNavigate()

    const {id,color,final_price,gender,images,name,original_price,rating,reviews,sizes} = allproducts;

    const settings = {
        // dots: true,
        infinite: true,
       speed: 500,
         autoplay: true,

       slidesToShow: 3,
       slidesToScroll: 1
     };



    useEffect(() => {
       
        if(allproducts?.length === 0){
            dispatch(getData())
        }   
    },[dispatch,allproducts.length])

    console.log(allproducts)
 
    return (
        <div>
        <Text textAlign="center" fontSize="3xl" fontWeight="600"> Best Sellers </Text>
        <Text textAlign="center">Choose your Style</Text>


        {
            loading ?
            <Progress size='md' isIndeterminate  w="90%" margin={"auto"}/>
            :error ?
            <h1>some thing wrong .please try again later</h1>
            : <Box>

              <Slider {...settings}>

               {allproducts.map((item,id)=>{

                return(
                    <div  onClick={()=> navigate(`/collections/all/${id+1}`)}
>
                        <img src={item.images} />
                        <Text  fontSize={["sm", "xl"]}  color='black'>{item.name +" " + "|" +" " + item.color}</Text>
                        <Text>{item.gender}</Text>
                        <Text color='red' fontWeight="600">Rs {item.final_price}</Text>


                    </div>
                )
               })}
                
              </Slider>
        
              
          
           </Box>
           

        
            } 

        </div>
    )
}