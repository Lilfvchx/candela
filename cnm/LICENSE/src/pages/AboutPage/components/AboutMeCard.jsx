import React from 'react'
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
<<<<<<< HEAD
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { SiYoutube, SiInstagram } from 'react-icons/si'
import { Button, Center, Stack, Text } from '@chakra-ui/react'
import infocs from '../../../components/object/infoCE'
=======
} from "@chakra-ui/react";
import infocs from "../../../components/object/infoCE";
import { ImYoutube } from 'react-icons/im';
import {  SiInstagram } from 'react-icons/si';
import {  Button, Center, Stack, Text } from '@chakra-ui/react';
>>>>>>> 20181e536156689f21699b86baefb7830c01f674

export default function AboutMeCard() {
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
        bg={useColorModeValue('white', 'gray.800')}
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
              href="https://www.instagram.com/candelaenmovimiento/"
              isExternal
              display="block"
              color={useColorModeValue('gray.800', 'white')}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: 'gray.600', textDecor: 'underline' }}
            >
              Candela Errandonea Rivarola
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {infocs.map((info, index) => (
                <p key={index}>{info}</p>
              ))}
            </chakra.p>
          </Box>
          <Center p={8}>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
              {/* Instagram */}
              <Link href='https://www.instagram.com/candelaenmovimiento/' isExternal>
              <Button
              position={"absoulute"}
                w={'full'}
                className="instagram-button"
                color="white"
                leftIcon={<SiInstagram />}
                background="rgb(155, 15, 155)"
                _hover={{ background: "black" }}
              >
                <Center>
                  <Text>INSTAGRAM</Text>
                </Center>
              </Button></Link>

              {/* Youtube */}
              <Link href='https://www.youtube.com/channel/UCwI67p72iKpxwr8LSz-dv0A' isExternal>
              <Button
                position={"absoulute"}
                w={'full'}
                variant={'outline'}
                leftIcon={<SiYoutube />}
                color="white"
                background="red"
                _hover={{ background: "black" }}
              >
                <Center>
                  <Text>YOUTUBE</Text>
                </Center>
              </Button>
              </Link>
            </Stack>
          </Center>
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
  )
}
