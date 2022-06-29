import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import infocs from "../../../components/object/infoCE";
import { ImYoutube } from 'react-icons/im';
import {  SiInstagram } from 'react-icons/si';
import {  Button, Center, Stack, Text } from '@chakra-ui/react';

export default function AboutMeCard(){
  return (
    
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      className="about-me-card"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h="10%"
          fit="cover"
          src="https://i.imgur.com/ViAJsvP.jpg"
          alt="imagen primer plano Candela Errandonea"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="lg"
              fontWeight="600"
              textTransform="uppercase"
              color="#A800FC"
            >
              About me
            </chakra.span>
            <Link
              href="https://www.instagram.com/candelaenmovimiento/" isExternal
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              
            >
              Candela Errandonea Rivarola
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {infocs.map((info, index) => <p key={index}>{info}</p>)}
            </chakra.p>
          </Box>

          
        </Box>
        <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>

        {/* Youtube */}
        <Link to="https://www.youtube.com/channel/UCwI67p72iKpxwr8LSz-dv0A" isExternal>
        <Button w={'full'} colorScheme={'red'} leftIcon={<ImYoutube/>}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>
        </Link>

        {/* instagram */}
        <Link to="https://www.instagram.com/candelaenmovimiento/" isExternal>
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiInstagram/>}>
          <Center>
            <Text>Instagram</Text>
          </Center>
        </Button>
        </Link>
      </Stack>
    </Center>
      </Box>
    </Flex>

  );
};

