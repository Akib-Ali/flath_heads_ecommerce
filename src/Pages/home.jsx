
 import React from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux"
import { Box ,Text,Button} from '@chakra-ui/react';
import { Stack, HStack, VStack,Flex } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { WhyFlatheads } from './whyflatheads';
import { Videofeatures } from '../Components/Video/videoorlogo';
import { CustomerReview } from '../Components/customerreviews';
import "./home.css"
import { HomeAllShoes } from '../Components/homepageshoesslider/homeallshoes';


export const Home=()=>{

    const data = useSelector((state) => state.products)

    const allsliderimg= [
      "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/FH_Banner3jpg_41cafa8d-1e9b-4545-9cd6-fa20b38961b0.jpg?v=1655199681",

      "https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/91164066_520201772214122_5841755821549027328_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=Zk9YpuaWLfgAX_6JN17&_nc_ht=scontent.fknu1-2.fna&oh=00_AT_1R8UKuUAmig0VRAeGQsx-QqURuey0hZYAWExDPpwwZg&oe=63681044",

      "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Linen_banner2.jpg?v=1655047319",

      "https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/90779143_518805955687037_3565917015778525184_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=WEwxI59QAXQAX-jTsLD&_nc_ht=scontent.fknu1-1.fna&oh=00_AT8jQ5E-jz6M1XNbeYePY1iTZsyFjCvCss36JAefCbDB7Q&oe=6367A6F4",

      "https://scontent.fknu1-3.fna.fbcdn.net/v/t39.30808-6/280662625_1035268600707434_5023208823488526272_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8NsmXcp0ZNgAX9NkPkA&_nc_oc=AQn_USfdWwZxIiL4CQlvvav722xa4PIIKB0hATTOPfcgcuj7pDLSI5qr8ztKBPlziEo&_nc_ht=scontent.fknu1-3.fna&oh=00_AT8m3cC5SBSomr87zLKS6ac7W0kB4bTBeGf-vcr1OOuiww&oe=634522BF",

      "https://scontent.fknu1-4.fna.fbcdn.net/v/t1.6435-9/84253345_492556618311971_6361332188738224128_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=n9JHIAnKuRsAX9iQ-c3&_nc_ht=scontent.fknu1-4.fna&oh=00_AT-DGK9Vy6hoHg9XnjOQNrXnYzoW6ZIqSw-lnV0tcXHbCg&oe=63676005",

      "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Banana_banner1.jpg?v=1655047319",

      "https://scontent.fknu1-4.fna.fbcdn.net/v/t39.30808-6/273351380_971241417110153_7491669872602125815_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8Z286UHFMlUAX_xXF98&_nc_ht=scontent.fknu1-4.fna&oh=00_AT-__gJpYvTTXkzGuttuMRitn4Tv_LrA4Kd2FItL9428WA&oe=63462E95",

      "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Softknit_banner1.jpg?v=1655047319",

      "https://scontent.fknu1-1.fna.fbcdn.net/v/t39.30808-6/245774296_905580737009555_1318829069871000851_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=I7Dk9Xl89S8AX9FdrDE&_nc_oc=AQnpJiS4Ae1MFLyYhdT_qy4VjGSR6Vy9syOnGA_xy_yeAeuDaujJyEWwvf16YKTB0cg&_nc_ht=scontent.fknu1-1.fna&oh=00_AT-tzMjzx1hajRMPRR6uSgpDlNr8_4CHImswyH4h2XsXzg&oe=63460D31",

      "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/KoolTex_banner2.jpg?v=1655047319",

      "https://scontent.fknu1-2.fna.fbcdn.net/v/t39.30808-6/240674539_869234723977490_3184882947991657818_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ndATSjJyeJsAX_IihVH&_nc_ht=scontent.fknu1-2.fna&oh=00_AT9r35UNJRqLKp4i7p4qWnhbogpjmwVqQqDVhSgN2Px3sQ&oe=634584D6",

      "https://scontent.fknu1-1.fna.fbcdn.net/v/t1.6435-9/82040922_471566967077603_5857282536345960448_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_ohc=F8uIaoLJDdgAX_23jHX&_nc_ht=scontent.fknu1-1.fna&oh=00_AT_SKSDlpBwigbvMAr7BbwR1oN-YNdexduv3yI6_1L7Vyg&oe=636791B4",

      "https://scontent.fknu1-2.fna.fbcdn.net/v/t39.30808-6/240666826_869234690644160_8300686774476334509_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qzt5FfIg7FoAX-cv3JT&_nc_ht=scontent.fknu1-2.fna&oh=00_AT9Rlp5OJ_PIYtLJmJf8A5ZMEtpjXKQ9tsPgW-GIci7Waw&oe=63463CDD",

      "https://scontent.fknu1-3.fna.fbcdn.net/v/t1.6435-9/78231900_431805827720384_6201466500889444352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=u92VY7L__rAAX9A6SOD&_nc_ht=scontent.fknu1-3.fna&oh=00_AT-5savQ-huhhhit0caVZ8_RfsA50MnXKkgQRZiGgyCpFA&oe=63655A7E",

     "https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/134707743_721354868765477_750428937089728692_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=es25Vjxa09AAX8m71S2&_nc_ht=scontent.fknu1-2.fna&oh=00_AT9X02ko2heMu19czV-Esn67BQLOKWkC3DZaLoq0GiJGxg&oe=63679A3D"

    ]

    const settings = {
         dots: true,
         infinite: true,
        speed: 500,
         autoplay: true,

        slidesToShow: 2,
        slidesToScroll: 1
      };



    
    return(
        
        <Box>


         
         <Box width={["98%", "98%"]}    mt="60px" margin="auto">
        
        <Slider {...settings}>
        
        {allsliderimg.map((img)=>{
               return(
                <div className="imgcontrol">
                <img src={img} />

                </div>

               ) 
           })}
         </Slider> 

    </Box>


       <Box width={["98%" , "90%"]}  margin="auto" mt="50px" height="400px">
        <HomeAllShoes/>
       </Box>


         

           <Box>
            <WhyFlatheads/>
           </Box>


           
           <Box width="99%" border="1px solid #EDEDED" height={["80%" , "20%"]} margin="auto" mt="100px" backgroundColor="#EDEDED">
            <CustomerReview/>
           </Box>

           <Box width={["99%" , "90%"]} margin="auto">
            <Videofeatures/>
           </Box>

              
      </Box>
      
    )
}