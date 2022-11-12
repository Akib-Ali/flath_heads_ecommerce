
import React from 'react';
import Slider from "react-slick";
import { useSelector } from "react-redux"
import { Box, Text, Button } from '@chakra-ui/react';
import { Stack, HStack, VStack, Flex } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { WhyFlatheads } from './whyflatheads';
import { Videofeatures } from '../Components/Video/videoorlogo';
import { CustomerReview } from '../Components/customerreviews';
import "./home.css"
import { HomeAllShoes } from '../Components/homepageshoesslider/homeallshoes';
import sliderpic_01 from "../Components/Video/sliderpic_01.webp"
import sliderpic_02 from "../Components/Video/sliderpic_02.webp"
import sliderpic_03 from "../Components/Video/sliderpic_03.webp"
import sliderpic_04 from "../Components/Video/sliderpic_04.webp"
import sliderpic_05 from "../Components/Video/sliderpic_05.webp"
import slidertextlogo_01 from "../Components/Video/slidertextlogo_01.jpg"
import slidertextlogo_02 from "../Components/Video/slidertextlogo_02.jpg"
import slidertextlogo_03 from "../Components/Video/slidertextlogo_03.jpg"
import slidertextlogo_05 from "../Components/Video/slidertextlogo_05.jpg"


export const Home = () => {

  const data = useSelector((state) => state.products)

  const allsliderimg = [

    `${sliderpic_01}`,
    `${slidertextlogo_01}`,

    `${sliderpic_02}`,
    `${slidertextlogo_02}`,

    `${sliderpic_03}`,
    `${slidertextlogo_03}`,
    `${sliderpic_04}`,
    `${slidertextlogo_05}`,

    `${sliderpic_05}`,


  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,

    slidesToShow: 2,
    slidesToScroll: 1
  };




  return (

    <Box>



      <Box width={["98%", "98%"]} mt="60px" margin="auto">

        <Slider {...settings}>

          {allsliderimg.map((img) => {
            return (
              <div className="imgcontrol">
                <img src={img} />

              </div>

            )
          })}
        </Slider>

      </Box>


      <Box width={["98%", "90%"]} margin="auto" mt="50px" height="400px">
        <HomeAllShoes />
      </Box>




      <Box>
        <WhyFlatheads />
      </Box>



      <Box width="99%" border="1px solid #EDEDED" height={["80%", "20%"]} margin="auto" mt="100px" backgroundColor="#EDEDED">
        <CustomerReview />
      </Box>

      <Box width={["99%", "90%"]} margin="auto">
        <Videofeatures />
      </Box>


    </Box>

  )
}