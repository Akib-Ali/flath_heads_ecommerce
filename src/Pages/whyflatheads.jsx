import { Box ,Stack} from "@chakra-ui/react"
import { SimpleGrid,Image ,Text,Button} from '@chakra-ui/react'
// import {Flathead_customerImages} from "./Components/Video/Flathead_customerimages.jpg"
import "./whyflatheads.css"

export const WhyFlatheads=()=>{

  const logoName = [
 {url: "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Innovative_materials-01.png?v=1655924148" ,
 title:"Innovative Materials"},

{url: "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Smart_design-01.png?v=1655924166" , title :"Smart Design"},

{url: "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Supreme_comfort-01_copy_c9964ab2-2304-4e64-b714-12352b02c12e.png?v=1655924181" , title :"Supreme Comfort"},

{url: "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Ultra_Lightweight-01.png?v=1655924205" , title :"Ultra-lightweight"},

    {url: "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Environment_friendly-01.png?v=1655924220" , title :"Environmentally Relevant"}
  ]

    return(
    <Stack direction={['column', 'row']} spacing='14px'  width={["97%" , "90%"]} margin="auto" mt="100px" height="100%">

        
     <SimpleGrid columns={[2, null, 3]} gap="10px" backgroundColor="#F5EFE6" width="100%" overflow="hidden" borderRadius={"5px"}>
      
      {logoName.map((item)=> (
         
         <Box  width={["150px", "200px"]} >
            <Image boxSize={"100px"} src={item.url}/>
            <Text>{item.title}</Text>
         </Box>

      ))}

      <Button backgroundColor="yellow" mt="30px" width="150px">LEARN MORE</Button>
      

      </SimpleGrid>

        <div className="fbimage">
             <img  src="https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/101687732_562634347970864_8825524977093574656_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=7zeNRm5dXIoAX--2Q78&_nc_ht=scontent.fknu1-2.fna&oh=00_AT_y9lRtl3lTO1th2lz9ADNUxNOXmkaxErmJ5zOunxOjew&oe=6363A119https://scontent.fknu1-2.fna.fbcdn.net/v/t1.6435-9/101687732_562634347970864_8825524977093574656_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=7zeNRm5dXIoAX--2Q78&_nc_ht=scontent.fknu1-2.fna&oh=00_AT_y9lRtl3lTO1th2lz9ADNUxNOXmkaxErmJ5zOunxOjew&oe=6363A119"/> 

             {/* <img src={Flathead_customerImages}/> */}
        </div>
     
        

       </Stack>
      
    )
}