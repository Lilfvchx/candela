import { Image } from '@chakra-ui/react'
import  { Box, Flex } from '@chakra-ui/react'  

export default function Photo({fuente, alte}) {
    return( 
        <>
        <Box align="center" bg="#000" boxShadow="xl" >
            <Image src={fuente} alt={alte} borderRadius='2xl' objectFit= "cover" height= "200px"  />
        </Box>

        </>
    )

}