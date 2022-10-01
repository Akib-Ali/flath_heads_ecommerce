import { Box ,Image,Text,Flex,Checkbox, CheckboxGroup ,VStack } from '@chakra-ui/react'
import {getData} from "../Redux/Products/action"
import React, { useState ,useEffect} from "react";

import {useSearchParams} from "react-router-dom";
import { useDispatch } from "react-redux";

export const Filter=()=>{
    const [searchParams,setSearchParams] = useSearchParams() 
    const [gendervalue,setGender] = useState([searchParams.getAll("gender") ||[]])

    const dispatch = useDispatch()
    const genderhandler=(values)=>{
        console.log(values)
        setGender(values)

    }


    // useEffect(()=>{
    //     if(gendervalue){
    //       setSearchParams({gender:gendervalue});
  
    //       let params= {
    //         gender:searchParams.getAll("gender")
    //       }
    //         dispatch(getData(params));
  
          
  
    //     }
    //   },[setGender,setSearchParams])
  
    return (
        <Box border="2px solid green" height="300px" width="300px">
        <Box>
        <Text>Filter Component</Text>
          <Text>Gender</Text>

          <CheckboxGroup colorScheme='green' defaultValue={gendervalue} >
         <VStack spacing={[1, 5]} direction={['column', 'row']}>
         <Checkbox value='MEN'>MEN</Checkbox>
         <Checkbox value='WOMEN'>WOMEN</Checkbox>
         
         </VStack>
         </CheckboxGroup>

        </Box>
          
        </Box>
    )
}