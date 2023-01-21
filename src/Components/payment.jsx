import { json, useNavigate } from "react-router-dom"




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

  const [showPassword, setShowPassword] = useState(false);
  const [months, setmonths] = useState("");
  const [year, setyear] = useState("");
  const [cvv, setcvv] = useState("")
  const [cardholder, setcardholder] = useState("")
  const [cardnumber, setcardnumber] = useState("")
  const [state, setstate] = useState("")
  const [pincode, setpincode] = useState("")

   let getpayment = JSON.parse(localStorage.getItem("totalprice"))
   const navigate = useNavigate()
   



    

   

   function getformdata(e){
  
    e.preventDefault()
    alert("Please Confirm this address")
    navigate("/paymentsussessful")
    
  }



  
 



    
    return(
      <>
        
        <Stack direction={['column', 'row']} spacing='20px' width={["95%", "75%"]}  margin={["0px", "auto"]} mt={["100px", "80px"]}
         bg={useColorModeValue('gray.50', 'gray.800')} 
        >
        <Box mt="100px">
        <img src="https://d28wu8o6itv89t.cloudfront.net/images/Debitcarddetailspng-1577957111341.png"/>
        </Box>

        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'xl'} textAlign={'center'}>
              Payment Detail
            </Heading>
            
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <form    onSubmit={getformdata}>


            <FormControl id="cardnumber" isRequired>
                <FormLabel> Card Number</FormLabel>
                <Input type="number" onChange={(e) => setcardnumber(e.target.value)} autoComplete="off"  min={1000000000000000} 
                max={9999999999999999}/>
               </FormControl>


               <FormControl id="caedholder" isRequired>
                <FormLabel>Card Holder</FormLabel>
                <Input type="text"  onChange={(e) => setcardholder(e.target.value)} autoComplete="off" minLength={3}/>
              </FormControl>




              <HStack>
                 <Box>
                  <FormControl id="months"  isRequired>
                    <FormLabel>Months</FormLabel>
                    <Input type="number" onChange={(e)=> setmonths(e.target.value)}  autoComplete="off"  min={1} max={12}/>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="year" isRequired>
                    <FormLabel>Year</FormLabel>
                    <Input type="number"  onChange={(e) => setyear(e.target.value)} autoComplete="off" min={2023} max={2030}/>
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="cvv" isRequired>
                    <FormLabel>CVV</FormLabel>
                    <Input type="number"  onChange={(e) => setcvv(e.target.value)} autoComplete="off" min={100} max={999}/>
                  </FormControl>
                </Box>

              </HStack>

             


           

              <Stack spacing={10} pt={2}>
               
               <Button 
                 type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}

                
                  
                  >

                  Confirm and Pay {getpayment}
                  
                  
                </Button> 

                

               
                
              </Stack>
              </form>
              
            </Stack>
          </Box>
        </Stack>
      </Flex>


     
          
    </Stack>
    </>
    )
}