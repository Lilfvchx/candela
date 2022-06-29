import React from 'react'
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { Stack, Text, Button } from '@chakra-ui/react';
import { FaUniversity } from 'react-icons/fa';
import {GiTheaterCurtains} from 'react-icons/gi';
import './componentes/styles.css'
export default function ObrasContenido() {
  return (
    <div className='obras'>
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
          src="https://i.imgur.com/CCDLI26.jpg"
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
              Obras e informacion academica
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

    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold" className='titulo'>EDUCACION</Text>
        <FaUniversity />
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        <p className='fecha'>2009-2016 </p>
        <p className='info'>Maestra de danzas clásicas Escuela Provincial de Danzas Brisé n°1860, Trelew</p>
        <p className='fecha'>2019-2020 </p>
        <p className='info'>Fundación Julio Bocca (E.N.P. y Taller Contemporáneo)</p>
        <p className='fecha'>2020-2021</p> 
        <p className='info'>instructorado elongación por biomecánica ECA Conciencia Corporal, CABA</p>
        <p className='fecha'>2021-presente </p>
        <p className='info'>Licenciatura en composición coreográfica mención danza UNA, CABA</p>
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
    
        </Stack>
      </Stack>
    </Stack>
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold" className='titulo'>OBRAS REALIZADAS</Text>
        <GiTheaterCurtains />
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        <p className='fecha'>2014-2016 Compañia de ballet de Menena Astrova </p>
        <p className='info'>Bolero de Ravel</p>
        <p className='info'>Las Aventuras de Bernadette</p>
        <p className='fecha'>2016 Summer Ajkun</p>
        <p className='info'>Giselle, cuerpo de baile</p>
        <p className='info'>Pieza coreográfica contemporánea, Ellen Sinopoli</p>
        <p className='fecha'>2017 junior artist Ajkun</p> 
        <p className='info'>Anna Karenina</p>
        <p className='fecha'>2018-2019 Alba Serra </p>
        <p className='info'>Caballito jorobado, cuerpo de baile</p>
        <p className='info'><Link href='https://www.youtube.com/watch?v=DDK7HyGBG4I&ab_channel=AlbaSerra' isExternal>Coppelia, cuerpo de baile</Link></p>
        <p className='info'><Link href='https://youtu.be/mDSq1hGmdd4?t=1275' isExternal>Dúo clásico</Link></p>
        <p className='info'>Cipollino, cuerpo de baile</p>
        <p className='fecha'>2018-2019 Compañia juvenil San Martin </p>
        <p className='info'>Cinético</p>
        <p className='info'><Link href='https://www.youtube.com/watch?v=MtaTAxFJP2I' isExternal>Pulsión</Link></p>
        <p className='info'><Link href='https://www.youtube.com/watch?v=o6QDP049-Xo&ab_channel=Compa%C3%B1iaJuvenilSanMartin' isExternal>Presentado en Galas solidarias Marianela Nuñez 2018 y Danzar por la Paz 2019</Link></p>
        <p className='info'><Link href='https://www.youtube.com/watch?v=ldM4AZjZlsw&ab_channel=PatricioTerrera' isExternal>Nos/Otras</Link></p>
        <p className='info'><Link href='https://www.youtube.com/watch?v=T4Kre5jR_jY&ab_channel=MiguelAugustoRamonell' isExternal>No lo dejes ir, presentado en Galas solidarias Marianela Nuñez 2019
          </Link></p>
          <p className='fecha'>2019</p>
          <p className='info'>Estancia, dirección Florencia González</p>
          <p className='info'>Invierno, compañía Qamkunapah dirección Jonatan Moya</p>
          <p className='info'>Deseo Confeso, dirección Jonathan Castro Rivero</p>
          <p className='info'>Dark dreams, dirección Jonathan Castro Rivero</p>
          <p className='fecha'><Link href='https://youtu.be/-rYxJ5Wmw_Q?t=962' isExternal>2021 EFI San Juan
          </Link></p>
          <p className='fecha'>2022 cía de la UNA</p>
          <p className='info'>Ceci est un rencontre, Marthe</p>
          <p className='info'>Próxima, Agustina Sario</p>
          <p className='info'>La oLa, Premio Graduadxs a la Creación 2022. Dirección Soledad Gutiérrez y Luciana Pedroni Saltzman</p>

        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
    
        </Stack>
      </Stack>
    </Stack>
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold" className='titulo'>NOTAS</Text>
        <FaUniversity />
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        <p className='fecha'><Link href='https://vimeo.com/search?q=compa%C3%B1ia%20juvenil%20san%20martin' isExternal>Vimeo cia juvenil sm 
          </Link></p>
          <p className='fecha'><Link href='https://denorteanorte.com/2019/05/05/danza-teatro-y-politicas-sociales-de-san-martin-en-la-feria-del-libro/' isExternal>Feria del libro cia juvenil sm  
          </Link></p>
          <p className='fecha'><Link href='https://www.lanacion.com.ar/espectaculos/danza/encuentros-por-azar-entre-bailarines-y-musicos-nid28022022/' isExternal>Ceci est une rencontre FIBA 2022 
          </Link></p>

        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
    
        </Stack>
      </Stack>
    </Stack>


            </chakra.p>
          </Box>
        </Box>
      </Box>
    </Flex>
    </div>
  )
}
