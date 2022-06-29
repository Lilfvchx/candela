import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./error.css"
export default function Erroruwu() {
  return (
    
    <Flex
      w={'full'}
      h={'100vh'}
      className="uwu uwufondo"
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}
        
        >
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            UWU esta pagina no existe, usa el boton para volver a la pagina principal
          </Text>
          <Stack direction={'row'}>
          <Link to="/">
            <Button 
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              position={"center"}
              >
              ir a inicio
            </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );

    }
