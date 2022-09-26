import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Center,
Spacer
  
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
 // const [slider, setSlider] = React.useState<Slider | null>(null);
 const [slider,setSlider] = useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: [{Y1:"2013"} , {Y2:"2014"}  ],
      text:"CoSchedule blog begins and calendar MVP goes to ideation phase.We get our first official office in downtown Bismarck, ND The CoSchedule calendar launches on Sept. 23, 2013 We get our first round of seed funding @ $500k "
    //   image:
    //     'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    
     },
    {
       title: [{Y1:"2015"} , {Y2:"2016"}  ],
       text:
         "CoSchedule reaches 5000 customers,2nd CoSchedule location opens in Fargo, ND CoSchedule blog reaches 100,000 subscribers CoSchedule is officially in 100+ Countries ",
    
    },
    {
       title: [{Y1:"2017"} , {Y2:"2018"}  ],
       text:"CoSchedule blog begins and calendar MVP goes to ideation phase.We get our first official office in downtown Bismarck, ND The CoSchedule calendar launches on Sept. 23, 2013 We get our first round of seed funding @ $500k "
    },

    {
        title: [{Y1:"2019"} , {Y2:"2020"}  ],
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
     
      
       },
  ];

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'600px'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
          color={"white"}
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
      color={"white"}
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundColor={"blue"}
            //  backgroundImage={`url(${card.image})`}
             >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                // w={'full'}
                // maxW={'lg'}
                position="absolute"
                top="30%"
                transform="translate(0, -50%)">
                 <Heading color={"white"} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}> 
                   Our Story
                  </Heading>
                  <Flex gap={["10rem", "40rem"]}>
                  {card?.title?.map((item)=>{
                    return(
                        <Box p="0" marginTop="70px">
                            <Text fontSize={"3xl"} color="white">{item.Y1}</Text>
                            <Text fontSize={"3xl"} color="white">{item.Y2}</Text>
                        </Box>
                    )
                  })}
  
</Flex>

                 
                {/* </Heading> */}
                <Center>
                <Text fontSize={{ base: 'md', lg: 'xl' }} color="white" >
                  {card.text}
                </Text>
                </Center>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}