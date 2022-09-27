import { ReactNode } from 'react';
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiUserLine } from "react-icons/ri"
import { BsBasket3 } from "react-icons/bs"

import {Box,Flex,Avatar,HStack,IconButton,Button,Menu, MenuButton,MenuList,MenuItem,MenuDivider,useDisclosure,useColorModeValue,
  Stack,Text,Spacer,Icon
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, Search2Icon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

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

  const cart = useSelector((state)=> state.cart.cart)

  return (
    <>
      <Box bg={useColorModeValue('whitesmoke', 'whitesmoke')} px={6} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={40} alignItems={'center'}>
            <Box marginLeft={130}>
            <Link to="/">
              <img src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945' />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>

              <Link to="/collections/all">   <Text fontSize='lg' fontWeight={850}>Shop </Text></Link>
              <Link to="/shop">   <Text fontSize='lg' fontWeight={700}>WOMEN <ChevronDownIcon></ChevronDownIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='lg' fontWeight={700}>MEN <ChevronDownIcon></ChevronDownIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='lg' fontWeight={700}>NEWS! <ChevronDownIcon></ChevronDownIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='lg' fontWeight={700}>CLASSICS <ChevronDownIcon></ChevronDownIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='lg' fontWeight={700}>ABOUT <ChevronDownIcon></ChevronDownIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='lg' fontWeight={700}>HELP <ChevronDownIcon></ChevronDownIcon></Text></Link>


              <Spacer />

              <Flex>

                <Icon as={BsSearch} boxSize="25px" mx={4} />
                <Icon as={RiUserLine} boxSize="25px" mx={4} />
                <Icon as={BsBasket3} boxSize="25px" mx={2} />

                <Text backgroundColor={"#FFABE1"} borderRadius="35%" fontSize="2xl" fontWeight={700}>
                {cart ? cart.length : 0}
                </Text>

              </Flex>

            </HStack>
            {/* <Search2Icon size="2xl"></Search2Icon> */}

          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
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
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>

              <Link to="/collections/all">   <Text fontSize='2xl' fontWeight={600}>Shop </Text></Link>
              <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>WOMEN <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>MEN <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>NEWS! <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>CLASSICS <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>ABOUT <ArrowForwardIcon></ArrowForwardIcon></Text></Link>
              <Link to="/shop">   <Text fontSize='2xl' fontWeight={600}>HELP <ArrowForwardIcon></ArrowForwardIcon></Text></Link>





            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}