import { useToast,Wrap,Button} from '@chakra-ui/react'
import React from 'react'
export function ToastExample() {
    const toast = useToast()
    return (
      <Button
      colorScheme='teal' variant='link'
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        SHOW SIZE CHART
      </Button>
    )
  }