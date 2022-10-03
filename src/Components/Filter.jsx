import { Box ,Image,Text,Flex,Checkbox, CheckboxGroup ,VStack } from '@chakra-ui/react'
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'
import {getData} from "../Redux/Products/action"
import React, { useState ,useEffect} from "react";
import { useSearchParams } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    
  } from '@chakra-ui/react'
  import {  AddIcon,MinusIcon} from '@chakra-ui/icons'


import { useDispatch } from "react-redux";
 import  data from "../data.json"

export const Filter=()=>{
    
     {/* this code moin*/}
    const [filter,setfilter]= useState(data)
    const [colorfilter,setcolorfilter] = useState(data)
    const [collectionfilter,Setcollectionfilter] = useState(data)

    const dispatch = useDispatch()

    const genderhandler=(values)=>{
    setfilter(data.filter((ele)=>ele.gender == values[values.length-1]))
    }

    const colorhandler=(values)=>{
        setcolorfilter(data.filter((elem)=> elem.color == values[values.length-1]))
    }


    const collectionhandler =(values)=>{
        Setcollectionfilter(data.filter((elem)=> elem.name == values[values.length-1]))

    }

    
 
   useEffect(()=>{
    dispatch({type:"PRODUCT_SUCCESS", payload: filter})
    },[filter])


    useEffect(()=>{
        dispatch({type:"PRODUCT_SUCCESS", payload: colorfilter})
        },[colorfilter])
    


        useEffect(()=>{
            dispatch({type : "PRODUCT_SUCCESS", payload : collectionfilter})
        },[collectionfilter])
  

    {/* this code moin end*/}


    

      





  
    return (
        <Box border="2px solid green" height="300px" width="300px">

      

        {/* color choose */}

       
         <Box>
      

        


 <Accordion allowMultiple>
  

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Color
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
         
         
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
        </AccordionPanel>
      </>
    )}
  </AccordionItem>



  
  
  {/* collection */}


  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Collection
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          
        <Box>
       

       <CheckboxGroup colorScheme='green' defaultValue={collectionfilter} onChange={collectionhandler} >
        <VStack spacing={[1, 4]} direction={['column', 'row']} width="250px" border="1px solid blue" alignContent="center">
        <Checkbox value='BANANA KICKS'>BANANA KICKS</Checkbox>
        <Checkbox value='SOFTKNIT LOAFERS'>SOFTKNIT LOAFERS</Checkbox>

        <Checkbox value='LINEN SNEAKERS'>LINEN SNEAKERS</Checkbox>
        
        
        
        </VStack>
        </CheckboxGroup>

       </Box>


        </AccordionPanel>
      </>
    )}
  </AccordionItem>





  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Gender
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>


        <Box>
       

       <CheckboxGroup colorScheme='green' defaultValue={filter} onChange={genderhandler} >
        <VStack spacing={[1, 5]} direction={['column', 'row']}>
        <Checkbox value='MEN'  >MEN</Checkbox>
        <Checkbox value='WOMEN'>WOMEN</Checkbox>
        
        </VStack>
        </CheckboxGroup>

       </Box>

          
      


        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>

        </Box>
        </Box>







    )
}