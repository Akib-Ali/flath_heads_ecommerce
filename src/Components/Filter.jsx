import { Box ,Image,Text,Flex,Checkbox, CheckboxGroup ,VStack } from '@chakra-ui/react'
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'
import {getData} from "../Redux/Products/action"
import React, { useState ,useEffect} from "react";

import { useDispatch } from "react-redux";
 import  data from "../data.json"

export const Filter=()=>{
    
     {/* this code moin*/}
    const [filter,setfilter]= useState(data)
    const [colorfilter,setcolorfilter] = useState(data)
    const dispatch = useDispatch()
    const genderhandler=(values)=>{
    setfilter(data.filter((ele)=>ele.gender == values[values.length-1]))
    }

    const colorhandler=(values)=>{
        setcolorfilter(data.filter((elem)=> elem.color == values[values.length-1]))
    }

    
 
   useEffect(()=>{
    dispatch({type:"PRODUCT_SUCCESS", payload: filter})
    },[filter])


    useEffect(()=>{
        dispatch({type:"PRODUCT_SUCCESS", payload: colorfilter})
        },[colorfilter])
    
  

    {/* this code moin end*/}
  
    return (
        <Box border="2px solid green" height="300px" width="300px">

        <Box>
        <Text>Filter Component</Text>
        <Text>Gender</Text>

        <CheckboxGroup colorScheme='green' defaultValue={filter} onChange={genderhandler} >
         <VStack spacing={[1, 5]} direction={['column', 'row']}>
         <Checkbox value='MEN'  >MEN</Checkbox>
         <Checkbox value='WOMEN'>WOMEN</Checkbox>
         
         </VStack>
         </CheckboxGroup>

        </Box>


        {/* color choose */}


        <Box>
        <Text>Filter Component</Text>
        <Text>Color fILTER</Text>

         <CheckboxGroup colorScheme='green' defaultValue={colorfilter} onChange={colorhandler} > 
         <VStack spacing={[1, 5]} direction={['column', 'row']}>
         <Checkbox value='ALL-BLACK'  >All Black</Checkbox>
         <Checkbox value='AQUA BLUE'>Aqua BLUE</Checkbox>
         <Checkbox value='BURGUNDY RED'>BURGUNDY RED</Checkbox>
         <Checkbox value='NATURAL WHITE'>NATURAL WHITE</Checkbox>
         <Checkbox value='BLACK & GREY (BLACK SOLE)'>Black & Grey (black sole)</Checkbox>
         <Checkbox value='BLACK & RED (BLACK SOLE)'>BLACK & RED (BLACK SOLE)</Checkbox>
         
         </VStack>
         </CheckboxGroup> 
        

        </Box>
        </Box>







    )
}