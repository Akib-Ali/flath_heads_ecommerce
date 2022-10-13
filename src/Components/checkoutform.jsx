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
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useNavigate } from 'react-router-dom';
  
  export default function CheckoutCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [pincode, setpincode] = useState("")

    const navigate = useNavigate()
    


    function getformdata(e){
      console.log(name,lastname,email,city)
      e.preventDefault()
      alert("Please Confirm this address")
      navigate("/payment")
    }


    
 

    
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              CheckOut 
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <form onSubmit={getformdata}>

              <HStack>
                 <Box>
                  <FormControl id="firstName"  isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" onChange={(e)=> setname(e.target.value)} />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  onChange={(e) => setlastname(e.target.value)}/>
                  </FormControl>
                </Box>

              </HStack>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email"  onChange={(e) => setemail(e.target.value)}/>
              </FormControl>

              <FormControl id="address" isRequired>
                <FormLabel> Shipping Address</FormLabel>
                <Input type="text" onChange={(e) => setaddress(e.target.value)} />
            </FormControl>



            <HStack>
                 <Box>
                  <FormControl id="city" isRequired>
                    <FormLabel>City</FormLabel>
                    <Input type="text" onChange={(e) => setcity(e.target.value)} />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl id="state" isRequired>
                    <FormLabel>State</FormLabel>
                    <select onChange={(e) => setstate(e.target.value)}>
                      <option>Select Option</option>
                      <option>Utter Pradesh</option>
                      <option>Bihar</option>
                      <option>Punjab</option>
                      <option>U.K</option>
                    </select>
                  </FormControl>
                </Box>


                <Box>
                  <FormControl id="pincode" isRequired>
                    <FormLabel>PinCode</FormLabel>
                    <Input type="number"  onChange={(e)=> setpincode(e.target.value)}/>
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
                  }}>

                  continue to shopping
                  
                  
                </Button> 

                

               
                
              </Stack>
              </form>
              
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }