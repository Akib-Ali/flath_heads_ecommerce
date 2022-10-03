import React, { useState ,useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import { Box ,Text,VStack,Checkbox,CheckboxGroup,  Menu,Button,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from "@chakra-ui/react";
  import { Tooltip } from '@chakra-ui/react'

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

export const FilterMenusmall=()=>{



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
  

    return (
        <Box display={{base:"block" ,md:"none"}} p="0rem, 2rem">
        <Menu closeOnSelect={false}>
        <Tooltip hasArrow label='You can Filter Product for these below category'>

      <MenuButton as={Button} colorScheme='blue'>
        Filter Product
      </MenuButton>
      
    </Tooltip>
      <MenuList minWidth='240px'>
       
        <MenuOptionGroup title='Filter by Category ' type='checkbox'>
          
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
        <CheckboxGroup colorScheme='green' defaultValue={colorfilter} onChange={colorhandler} > 
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



  
  
  {/* collection */}


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

       <CheckboxGroup colorScheme='green' defaultValue={collectionfilter} onChange={collectionhandler} >
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





  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            <Text fontSize='xl' fontWeight="600" color="grey">Gender</Text>
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
       

       <CheckboxGroup colorScheme='green' defaultValue={filter} onChange={genderhandler} >
        <VStack alignItems={"baseline"}>
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

    
        </MenuOptionGroup>
      </MenuList>
    </Menu>
    </Box>
    
    
    
    )
}