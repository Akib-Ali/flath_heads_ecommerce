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
    

    const handlecardinputvalue=(e)=>{

      const name = e.target.name;
      const value = e.target.value;
      SetCardinput({...cardinput, [name] : value})
      }
   


   const handleSubmit=(e)=>{
    e.preventDefault()
   setCarddata({...cardinput,carddata})
   }
   console.log(carddata)
 



    
    return(
        <Stack direction={['column', 'row']} spacing='20px' width={["95%", "75%"]}  margin={["0px", "auto"]} mt={["100px", "80px"]}
         bg={useColorModeValue('gray.50', 'gray.800')} 
        >
      <Box mt="100px">
        <img src="https://d28wu8o6itv89t.cloudfront.net/images/Debitcarddetailspng-1577957111341.png"/>
      </Box>

      <form>
     <Box>

      <Flex
      minH={'100vh'}
    
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={8} px={3}>
        <Stack >
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

        
            
          

          <FormControl id="cardnumber" isRequired>
              
              <Input type="number"  placeholder="CARD NUMBER" name="cardnumber" value={cardinput.cardnumber} onChange={handlecardinputvalue}/>
            </FormControl>

            <FormControl id="cardholder" isRequired>
          
              <Input type="text"  placeholder="CARD HOLDER NAME" name="cardholdername" value={cardinput.cardholdername} onChange={handlecardinputvalue}/>
            </FormControl>
            
            <HStack>
              <Box>
                <FormControl id="cardmonth" isRequired>
              
                  <Input type="number" placeholder="MONTH"  name="cardmonth" value={cardinput.cardmonth} onChange={handlecardinputvalue}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="cardyear">
              
                  <Input type="number"  placeholder="YEAR" name="cardyear" value={cardinput.cardyear} onChange={handlecardinputvalue}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="cardcvv" isRequired>
                  
                  <Input type="text" placeholder="CVV" name="cardcvv" value={cardinput.cardcvv}  onChange={handlecardinputvalue}/>
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
              }}
              onClick={handleSubmit}
              >
                
               {`CONFIRM AND PAY ${getpayment} `}
                 
                
              </Button>
            </Stack>
           
          </Stack>
        </Box>
      </Stack>
    </Flex>

       

      </Box>

      </form>
     
    </Stack>
    )
}