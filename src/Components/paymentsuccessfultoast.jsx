import { useToast,Wrap,Button} from '@chakra-ui/react'
import React from 'react'

export const PaymentToastSuccessful=()=>{


    const toast = useToast()


return(

    <div style={{ width:"300px" , margin:"auto" ,marginTop:"50px"}}>
        {/* <h1  style={{textAlign:"center"}}>Confirm To Payment</h1> */}
        <Button
      colorScheme='teal' size="lg"
        onClick={() =>
          toast({
            title: 'Successfully payment.',
            description: "Congratulation Your Payment is successful",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position:"top"
          })
        }
      >
        Cofirm to Payment
      </Button>

    </div>
)


}