import { extendTheme } from "@chakra-ui/react"
import "@fontsource/roboto-slab"


//https://github.com/fontsource/fontsource, npm install @fontsource/open-sans 
const styles = {
  global: {
    'html, body': {
      color: '#fafafa',
      background: 'black',
    },
  },
  textStyles: { 
        primary: {
            fontFamily: "Roboto Slab"
        },
    }

}
export const Theme = extendTheme({styles})