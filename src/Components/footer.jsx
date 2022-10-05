import { ReactNode } from 'react';
import { Link } from 'react-router-dom'
 import { BsYoutube } from "react-icons/bs"
import { BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {TiSocialLinkedin} from "react-icons/ti"
import {GrInstagram} from "react-icons/gr"
import {HiMail} from "react-icons/hi"
// import {  BsYoutube} from '@chakra-ui/bs'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = (props) => {
  return (
    <>
     <Link to="/">
    <img src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945' width="120px" height="100px"/>
    </Link> 

    
    </>
     );
};

const ListHeader = ({ children,children: ReactNode  }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'} textDecoration="underline">
              © 2022 flatheads
            </Text>

             <Box display="flex" width="200px"  gap="20px">
            
            
            <BsYoutube/>
            <BsTwitter/>
            <BsFacebook/>
            <TiSocialLinkedin/>
            <GrInstagram/>
            <HiMail/>
            </Box> 
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link to="/collections/all">Shop All </Link>
            <Link to="/collection/women-shop">Women Product</Link>
            <Link to="/collection/men-shop">Men Product</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Help</Link>
          </Stack>
         <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack> 
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}