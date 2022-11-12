import { Stack, HStack, VStack ,Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import "./Adjustment_Layer.mp4"
import Apple from "./Apple.png"
import clip from "./Adjustment_Layer.mp4"
export const Videofeatures=()=>{

    const logo = [
        "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/mintlogo.png?v=1655050026",
        "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/yourstorylogo.png?v=1655050026",
        "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/lbblogo.png?v=1655050026",
        "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/cnbclogo.png?v=1655050026",
        "https://cdn.shopify.com/s/files/1/0258/2485/4100/files/theindianexlogo.png?v=1655050026"

    ]
    return(
   <Stack direction={['column', 'row']} spacing='24px'  margin="auto" mt="60px">
   
    <Box   width={["99%" , "50%"]}>
    <video width="820" height="240" controls autoPlay>
    <source src={clip} type="video/mp4"/>
    </video> 

    
     </Box>


     

    <Box   width={["99%" , "50%"]} backgroundColor="#EDEDED">
    
    <SimpleGrid columns={[2, null, 3]} spacing={10}  width={["100%" , "85%"]} margin="auto" mt="20%">
   
     {logo.map((images)=>{
        return(
            
                <Box  width={["120px" , "150px"]} height="150px" spacing="10px"> <img src= {images}/></Box>
        
        )
     })}
    
  </SimpleGrid>
  </Box>

   
   </Stack>
     
    )
}