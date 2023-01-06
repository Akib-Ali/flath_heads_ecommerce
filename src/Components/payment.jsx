import { json } from "react-router-dom"

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  

export const Payment=()=>{

  const [cardinput,SetCardinput] = useState({
    cardnumber:"",
    cardholdername:"",
    cardmonth:"",
    cardyear:"",
    cardcvv:""
  })

  const [carddata, setCarddata] = useState([])

     let getpayment = JSON.parse(localStorage.getItem("totalprice"))
    let num =0
    
    return(
        <Stack direction={['column', 'row']} spacing='35px'>
      <Box >
        <img src="https://d28wu8o6itv89t.cloudfront.net/images/Debitcarddetailspng-1577957111341.png"/>
      </Box>


      <Box>

      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            Payment Detail
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>

          <form>
            
          </form>

          <FormControl id="cardnumber" isRequired>
              
              <Input type="number"  placeholder="CARD NUMBER"/>
            </FormControl>

            <FormControl id="cardholder" isRequired>
          
              <Input type="text"  placeholder="CARD HOLDER NAME"/>
            </FormControl>
            
            <HStack>
              <Box>
                <FormControl id="cardmonth" isRequired>
              
                  <Input type="number" placeholder="MONTH" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="cardyear">
              
                  <Input type="number"  placeholder="YEAR"/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="cardcvv" isRequired>
                  
                  <Input type="text" placeholder="CVV" />
                </FormControl>
              </Box>
            </HStack>

            

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                
               {`CONFIRM AND PAY ${getpayment} `}
                 
                
              </Button>
            </Stack>
           
          </Stack>
        </Box>
      </Stack>
    </Flex>

       

      </Box>
     
    </Stack>
    )
}