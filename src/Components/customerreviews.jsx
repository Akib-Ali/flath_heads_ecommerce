import { Stack, HStack, VStack ,Box,Text ,Icon,Flex} from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai"

export const CustomerReview=()=>{

  const review = [
    {title : "My feet have stopped complaining" , name : "-Pranav Gadgil" , post :"Founder ,Baeyork"},
    {title : "Feel like wearing a T-shirt on my feet" , name : "-Ajinkya Malasane" , post :"Co-Founder ,Playment"},
    {title : "They feel comfortable all day long" , name : "-Bharat Jain" , post :"Teacher ,Sara-Pre School"}
  ]

    return(
       
    <Stack direction={['column', 'row']} spacing={["50px", "140px"]}  height="100%" textAlign="center" m="auto" mt="100px" mb="100px" width="90%">
     
     {review.map((allreview)=>{
        return (
            <Box  pl="15px" pr="15px">
             <Flex  width="200px" margin="auto" mb="10px">
             <Icon as={AiFillStar} boxSize="20px" mx={4} color="#FECD70"/>
             <Icon as={AiFillStar} boxSize="20px" mx={4} color="#FECD70"/>
             <Icon as={AiFillStar} boxSize="20px" mx={4} color="#FECD70"/>
             <Icon as={AiFillStar} boxSize="20px" mx={4} color="#FECD70"/>
             </Flex>
            
            
             <Text  fontSize="2xl" fontWeight="650">{allreview.title}</Text>
             <Text>{allreview.name}</Text>
             <Text>{allreview.post}</Text>
            </Box>
        )
     })}
    </Stack>
    )
}