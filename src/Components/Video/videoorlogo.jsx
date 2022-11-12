import { Stack, HStack, VStack, Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import "./Adjustment_Layer.mp4"
import Apple from "./Apple.png"
import clip from "./Adjustment_Layer.mp4"
import mintlogo from "./mintlogo.png"
import yourstorylogo from "./yourstorylogo.webp"
import lbblogo from "./lbblogo.webp"
import cnbclogo from "./cnbclogo.webp"
import theindianexlogo from "./theindianexlogo.webp"

export const Videofeatures = () => {

    const logo = [
        `${mintlogo}`,
        `${yourstorylogo}`,
        `${lbblogo}`,
        `${cnbclogo}`,
        `${theindianexlogo}`
    ]


    return (
        <Stack direction={['column', 'row']} spacing='24px' margin="auto" mt="60px">

            <Box width={["99%", "50%"]}>
                <video width="820" height="240" controls autoPlay>
                    <source src={clip} type="video/mp4" />
                </video>
            </Box>




            <Box width={["99%", "50%"]} backgroundColor="#EDEDED">

                <SimpleGrid columns={[2, null, 3]} spacing={10} width={["100%", "85%"]} margin="auto" mt="20%">

                    {logo.map((images) => {
                        return (

                            <Box width={["120px", "150px"]} height="150px" spacing="10px"> <img src={images} /></Box>

                        )
                    })}

                </SimpleGrid>
            </Box>


        </Stack>

    )
}