import {SiInstagram, SiYoutube} from 'react-icons/si';
import {  Button, Center, Stack, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
export default function SocialMedia() {
  return (
    <Center p={8}>
    <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
      {/* Instagram */}
      <Text fontWeight={"extrabold"} fontSize={"1.2em"}>Contacto:</Text>
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
          <Text color={"white"}>INSTAGRAM</Text>
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
          <Text color={"white"}>YOUTUBE</Text>
        </Center>
      </Button>
      </Link>
    </Stack>
  </Center>
  );
}