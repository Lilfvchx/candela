import {Text} from "@chakra-ui/react";
import React from 'react'
import { Center } from "@chakra-ui/react";

export default function Description({explication}) {
  return (
    <>
    <Center>
        <Text>{explication}</Text>
    </Center>
    </>
  )
}
