import { Box ,Stack} from "@chakra-ui/react"
import { SimpleGrid,Image ,Text,Button} from '@chakra-ui/react'
import Flathead_customerImages from "../Components/Video/Flathead_customerImages.jpg"
import Innovative_materials from "../Components/Video/Innovative_materials.webp"
import Smart_design from "../Components/Video/Smart_design.webp"
import "./whyflatheads.css"

export const WhyFlatheads=()=>{

  const logoName = [
 {url : `${Innovative_materials}`,
 title:"Innovative Materials"},

{url: `${Smart_design}`, 
title :"Smart Design"},

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
             

           <img src={Flathead_customerImages}/>
        </div>
     
        

       </Stack>
      
    )
}