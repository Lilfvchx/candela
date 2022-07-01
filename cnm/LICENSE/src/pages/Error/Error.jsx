import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
 Image
} from '@chakra-ui/react';
import { Link } from  'react-router-dom';
import "./style.css"
export default function Error() {


  return (
    <>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Link to={"/"}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            UwU<br />
            <Text as={'span'} color={'green.400'}>
              parece que esta pagina no existe o misstipeaste
            </Text>
          </Heading>
          </Link>
          <Text color={'gray.500'}>
            Perooo no te preocupes, podes hacer click en el UwU y volves a Home OwO :)
          </Text>
          
        </Stack>
      </Container>
      
    </>
  );
}

