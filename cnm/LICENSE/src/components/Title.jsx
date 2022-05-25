import { Heading } from '@chakra-ui/react';
 


export default function Title({title}) {
    return (
      <>
    {/* <ChakraProvider theme={titleTheme}> */}
     <Heading textAlign="center" >{title}</Heading>
     {/* </ChakraProvider> */}
      </> 
    )
}