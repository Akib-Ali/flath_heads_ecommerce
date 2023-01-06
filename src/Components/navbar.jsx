import React, { useState } from 'react';
import { ReactNode } from 'react';
import flatheads_navbarlogo from  "../Components/Video/flatheads_navbarlogo.webp"
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiUserLine } from "react-icons/ri"
import { BsBasket3 } from "react-icons/bs"
import {  AddIcon,MinusIcon} from '@chakra-ui/icons'
import {
  Box, 
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton, 
  MenuList,
  MenuItem,
  MenuDivider, 
  useDisclosure,
  useColorModeValue,
  Stack, Text, Spacer, Icon, Input,Image,
  Center,Circle, Divider
 } from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, Search2Icon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useSelector , useDispatch } from 'react-redux'
import { increaseQty,decreaseQty, removeFromCart } from '../Redux/Cart/action';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

import { useAuth0 } from "@auth0/auth0-react";





 const NavLink = ({ children, children: ReactNode }) => (
 <Link
  px={2}
  py={1}
  rounded={'md'}
  _hover={{
  textDecoration: 'none',
  bg: useColorModeValue('gray.200', 'gray.700'),
  }}
  href={'#'}>
  {children} 
  
</Link>
);

export default function Simple() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  const {isOpend ,onOpend,onClosed} = useDisclosure()
  const btnRefed = React.useRef()

  
  
  const cart = useSelector((state) => state.cart.cart)
   console.log(cart)
   const dispatch = useDispatch()

   
   const handleIncrease=(id,size)=>{

   dispatch(increaseQty({id,size}))
   }

  
  const handleDecrease=(id,size,qty)=>{
    if(qty > 1){
      dispatch(decreaseQty({id,size,qty}))
    }else{
      dispatch(removeFromCart({id,size,qty}))
    } }



    let convertToNumber=(str)=>{
    if(Number(str)){
    return Number(str)
    }
    let arr = str.includes(",") ? str.split(",") : []
    let final_str = arr.reduce((a,c)=> a+c, "")
    let result = Number(final_str)
    return result
    }

   let total_final_price = 0;
   cart.forEach((prod)=>{
    total_final_price+= convertToNumber(prod.final_price) * prod.qty;
   })


   //auth system
   const { loginWithRedirect , logout ,  user, isAuthenticated } = useAuth0();





 return (
 <>
  <Box bg={useColorModeValue('whitesmoke', 'whitesmoke')} px={4} >
  <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
  <IconButton
  size={'md'}
  icon={isOpend ? <CloseIcon /> : <HamburgerIcon />}
  aria-label={'Open Menu'}
  display={{ md: 'none' }}
  onClick={isOpen ? onClose : onOpen}
  />

  <HStack spacing={["10","80"]} alignItems={'center'}>

  <Box marginLeft="50px" display={{base:'none' , md:'flex'}} alignItems="center">
  <Link to="/">
  <img src={flatheads_navbarlogo} width="160px" height="100px"/> 
  </Link>
  </Box>

   <HStack
    s={'nav'}
    spacing={6}
     display={{ base: 'none', md: 'flex' }}>

    <Link to="/collections/all">   <Text fontSize='lg' fontWeight={850}>Shop </Text></Link>
    <Link to="/collection/women-shop">   <Text fontSize='lg' fontWeight={700}>WOMEN <ChevronDownIcon></ChevronDownIcon></Text></Link>
    <Link to="/collection/men-shop">   <Text fontSize='lg' fontWeight={700}>MEN <ChevronDownIcon></ChevronDownIcon></Text></Link>
  
    <Link to="/shop">   <Text fontSize='lg' fontWeight={700}>HELP <ChevronDownIcon></ChevronDownIcon></Text></Link>
    <Spacer />

     <Flex>
     <Icon as={BsSearch} boxSize="25px" mx={4} />
      {/* <Icon as={RiUserLine} boxSize="25px" mx={4} />  */}
    </Flex>


    

    </HStack>

   </HStack>
           
           
    <Flex alignItems={'center'} marginLeft="0px"  >
    <Menu>


    <Flex  align="center" >
      {
        isAuthenticated &&  <Flex gap={2}>
          <Text color="#FF9494" fontWeight="200" fontSize="sm">Welcome</Text>
          <Text color="#FF9494" fontWeight="500" fontSize="sm">{user.name}</Text>
        
            
        </Flex>
      
       }


     <Icon as={BsBasket3} boxSize="25px" mx={4}  onClick={onOpen} ref={btnRef} />

    <Circle size='40px' bg='yellow' color='white'>
    <Text  fontSize="2xl" fontWeight={700}>
      
      {cart ? cart.length : 0}
      </Text>
    </Circle>

      </Flex>



      <MenuButton
       ml="10px"
      as={Button}
       rounded={'full'}
       variant={'link'}
       cursor={'pointer'}
      minW={0}>
      <Avatar
      size={'sm'}
      src={
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
      }
      />
      </MenuButton>

       <MenuList>

                        {/* Authentication */}

                       


       {
        isAuthenticated ?
      <Button colorScheme='facebook' w="100%"    onClick={() => logout({ returnTo: window.location.origin })}>Log out</Button>
      :
     <Button colorScheme='facebook' w="100%" onClick={() => loginWithRedirect()}>Login</Button>
       }

       <Divider></Divider>
       <Divider></Divider>
       <Divider></Divider>
  
      <Button colorScheme='facebook' w="100%"> Admin Login</Button>
      
      

        </MenuList>
        </Menu>
        </Flex>  
       </Flex>


        {/* cart drawer here */}
           <Drawer
        isOpen={isOpen}
        size="md"
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
         <DrawerHeader>TOTAL CART ITEM ({cart.length})</DrawerHeader>

         <DrawerBody>

         {
          !isAuthenticated &&   <Text mb="15px" fontWeight="600" color="red"> Please login Ist   checkout page!</Text>
         }
         

         {cart.length > 0 && cart.map((item)=>{
          return( 
         <>
                  <Flex gap="5px">
                <Image
                 boxSize='100px'
                 objectFit='cover'
                 src={item.images[0]}
                 alt='Dan Abramov'
                />

                <Box>
                  <Text>{`${item.name}   |   ${item.color}`}</Text>
                  <Text>{item.gender}</Text>
                  <Flex gap={6}>
                   <Text>{`size : ${item.size}`}</Text>
                   <Text>{`quantity : ${item.qty}`}</Text>
                  </Flex>
                  
                </Box>
              <Spacer></Spacer>
                <Text>{`Rs ${item.final_price}`}</Text>
                  
                </Flex>

                <Flex   borderRadius="20px" width="155px" gap="25px" align="center" margin="auto" mb="15px" mt="10px">
                  
                <Button  colorScheme='teal' variant='outline' borderRadius="15px" 
                disabled={item.qty === 0} 
                onClick={()=> handleDecrease(item.id,item.size,item.qty)}>
                <MinusIcon></MinusIcon>
                </Button>

                <Text>{item.qty}</Text>
                    
                <Button  colorScheme='teal' variant='outline' borderRadius="15px"
                onClick={()=> handleIncrease(item.id, item.size)}> 
                <AddIcon></AddIcon>
                </Button>
                </Flex>
                </>
                )
              })}
            </DrawerBody>


             <Box ml="70%">
            <Text fontSize='xl' fontWeight="800">Subtotal</Text>
            <Text fontSize='2xl' fontWeight="400">{`Rs ${total_final_price}.00`}</Text>
           </Box>

            <DrawerFooter>
          
             <Link to="/checkout">
            <Button  height='48px' width='400px' border='2px' borderColor='green.500'>
             Check out
            </Button>  
            </Link>   

        
           </DrawerFooter>

             <DrawerFooter>
             <Button size='lg' height='48px' width='400px' border='2px' borderColor='green.500'> View cart</Button>
            </DrawerFooter>

          </DrawerContent>
        </Drawer>
 

  

        {/* end cart drawer */}
      

        {isOpen ? (
        
        <Box pb={4} display={{ md: 'none' }}>  
          
         <Stack as={'nav'} spacing={4}>

        
        <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>WOMEN <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
        <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>MEN <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
        <Link to="/collections/all">   <Text fontSize='2xl' fontWeight={600}>Shop </Text></Link>
        <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>NEWS! <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
        <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>CLASSICS <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
        <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>ABOUT <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
        <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>HELP <ArrowForwardIcon></ArrowForwardIcon></Text></Link>

        </Stack>
        </Box>
        ) : null}
      </Box>

       
    </>
  );
}