import { Link } from 'react-router-dom'
import { Center, Button } from '@chakra-ui/react'

export default function HomeBTN() {
  return (
    <Link to="/">
      <Center bgGradient="linear(to right, #210039,#ff9800)">
        <Button variant="solid" size="lg" colorScheme="transparent">
          Home
        </Button>
      </Center>
    </Link>
  )
}
