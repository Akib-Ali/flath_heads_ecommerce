import { Box ,Image,Text,Flex,Checkbox, CheckboxGroup ,VStack } from '@chakra-ui/react'
import { Radio, RadioGroup,Stack } from '@chakra-ui/react'
import { getMenData } from '../Redux/Products/action'; 
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
//  import  data from "../data.json"
// import { FilterMenusmall } from './filtermenu';
import mendata from "../mendata.json"

export const MenFilter=()=>{
    
     {/* this code moin*/}

    const [mencolorfilter,setmencolorfilter] = useState(mendata)
    const [mencollectionfilter,Setmencollectionfilter] = useState(mendata)

    const dispatch = useDispatch()

    

    const mencolorhandler=(values)=>{
        setmencolorfilter(men.filter((elem)=> elem.color == values[values.length-1]))
    }


    const mencollectionhandler =(values)=>{
        Setmencollectionfilter(men.filter((elem)=> elem.name == values[values.length-1]))

    }

    
 
   

    useEffect(()=>{
        dispatch({type:"MEN_PRODUCT_SUCCESS", payload: mencolorfilter})
        },[mencolorfilter])
    


        useEffect(()=>{
            dispatch({type : "MEN_PRODUCT_SUCCESS", payload : mencollectionfilter})
        },[mencollectionfilter])
  

    {/* this code moin end*/}


    

      





  
    return (
      

       <Box width="250px" >
       <Box  display={{ md:"block" ,base:"none"}} p="1rem 2 rem"  width="280px">

      

       
         
      

        


 <Accordion allowMultiple>
  

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              <Text fontSize='xl' fontWeight="600" color="grey">Color</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel >
         
        <Box display={{ md:"block"}} p="1rem 2 rem">
        <CheckboxGroup colorScheme='green' defaultValue={mencolorfilter} onChange={mencolorhandler} > 
         <VStack alignItems={"baseline"}>
         <Checkbox value='ALL-BLACK'  >All Black</Checkbox>
         <Checkbox value='AQUA BLUE'>Aqua BLUE</Checkbox>
         <Checkbox value='BURGUNDY RED'>BURGUNDY RED</Checkbox>
         <Checkbox value='NATURAL WHITE'>NATURAL WHITE</Checkbox>
         <Checkbox value='BLACK & GREY (BLACK SOLE)'>Black & Grey (black sole)</Checkbox>
         <Checkbox value='BLACK & RED (BLACK SOLE)'>BLACK & RED (BLACK SOLE)</Checkbox>
        
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
            <Text fontSize='xl' fontWeight="600" color="grey">Collection</Text>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          
       <Box display={{ md:"block"}} p="1rem 2 rem">

       <CheckboxGroup colorScheme='green' defaultValue={mencollectionfilter} onChange={mencollectionhandler} >
        <VStack alignItems={"baseline"}>
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





 
</Accordion>



    
            </Box> 

        
        </Box>
    







    )
}