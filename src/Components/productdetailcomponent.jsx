import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
export const ProductDetailComponent=({productdetail})=>{
    return(
        <Box>
            <h1>ProductDetail Component {productdetail.name}</h1>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        
           <Box>1</Box>
           <Box>2</Box>

 
           </Grid>
        </Box>
    )
}