import { Box, Stack } from "@chakra-ui/react"
import { SimpleGrid, Image, Text, Button } from '@chakra-ui/react'
import Flathead_customerImages from "../Components/Video/Flathead_customerImages.jpg"
import Flatheads_iindcustomerimages from "../Components/Video/Flathead_iindcustomerimages.jpg"
import Innovative_materials from "../Components/Video/Innovative_materials.webp"
import Smart_design from "../Components/Video/Smart_design.webp"
import SupremeComfort from "../Components/Video/SupremeComfort.webp"
import Ultra_Lightweight from "../Components/Video/Ultra_Lightweight.webp"
import Environment_friendly from "../Components/Video/Environment_friendly.webp"
import flatheadscustomer_03 from "../Components/Video/flatheadscustomer_03_images.jpg"
import comming_soon_images from "../Components/Video/comming_soon_images.jpg"
import "./whyflatheads.css"

export const WhyFlatheads = () => {

   const logoName = [
      {
         url: `${Innovative_materials}`,
         title: "Innovative Materials"
      },

      {
         url: `${Smart_design}`,
         title: "Smart Design"
      },

      {
         url: `${SupremeComfort}`,
         title: "Supreme Comfort"
      },

      {
         url: `${Ultra_Lightweight}`,
         title: "Ultra-lightweight"
      },

      {
         url: `${Environment_friendly}`,
         title: "Environmentally Relevant"
      }
   ]

   return (
      <Stack direction={['column', 'row']} spacing='14px' width={["97%", "90%"]} margin="auto" mt="100px" height="100%">


         <SimpleGrid columns={[2, null, 3]} gap="10px" backgroundColor="#F5EFE6" width="100%" overflow="hidden" borderRadius={"5px"} pl="2rem">

            {logoName.map((item) => (

               <Box width={["150px", "200px"]}  >
                  <Image boxSize={"100px"} src={item.url} />
                  <Text>{item.title}</Text>
               </Box>

            ))}

            <Button backgroundColor="yellow" mt="30px" width="150px">LEARN MORE</Button>


         </SimpleGrid>

         <div className="fbimage">


            <img src={Flathead_customerImages} />
         </div>



      </Stack>

   )
}